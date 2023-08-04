<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="จัดการสิทธิ์">
       ข้อมูลเพจเป็นข้อมูลตัวอย่างจำลอง ไม่ใช่ข้อมูลจริง
      </n-card>
    </div>
    <n-grid class="mt-4" cols="1 s:1 m:1 l:3 xl:3 2xl:3" responsive="screen" :x-gap="12">
      <n-gi span="1">
        <n-card :segmented="{ content: true }" :bordered="false" size="small">
          <template #header>
            <n-space>
              <n-dropdown trigger="hover" @select="selectAddMenu" :options="addMenuOptions">
                <n-button type="info" ghost icon-placement="right">
                  เพิ่มเมนู
                  <template #icon>
                    <div class="flex items-center">
                      <n-icon size="14">
                        <DownOutlined />
                      </n-icon>
                    </div>
                  </template>
                </n-button>
              </n-dropdown>
              <n-button type="info" ghost icon-placement="left" @click="packHandle">
                ทั้งหมด{{ expandedKeys.length ? 'เอาออก' : 'ขยาย' }}
                <template #icon>
                  <div class="flex items-center">
                    <n-icon size="14">
                      <AlignLeftOutlined />
                    </n-icon>
                  </div>
                </template>
              </n-button>
            </n-space>
          </template>
          <div class="w-full menu">
            <n-input type="input" v-model:value="pattern" placeholder="ใส่ชื่อเมนูเพื่อค้นหา">
              <template #suffix>
                <n-icon size="18" class="cursor-pointer">
                  <SearchOutlined />
                </n-icon>
              </template>
            </n-input>
            <div class="py-3 menu-list">
              <template v-if="loading">
                <div class="flex items-center justify-center py-4">
                  <n-spin size="medium" />
                </div>
              </template>
              <template v-else>
                <n-tree
                  block-line
                  cascade
                  checkable
                  :virtual-scroll="true"
                  :pattern="pattern"
                  :data="treeData"
                  :expandedKeys="expandedKeys"
                  style="max-height: 650px; overflow: hidden"
                  @update:selected-keys="selectedTree"
                  @update:expanded-keys="onExpandedKeys"
                />
              </template>
            </div>
          </div>
        </n-card>
      </n-gi>
      <n-gi span="2">
        <n-card :segmented="{ content: true }" :bordered="false" size="small">
          <template #header>
            <n-space>
              <n-icon size="18">
                <FormOutlined />
              </n-icon>
              <span>แก้ไขเมนู{{ treeItemTitle ? `：${treeItemTitle}` : '' }}</span>
            </n-space>
          </template>
          <n-alert type="info" closable> หลังจากเลือกรายการจากเมนู，เพื่อแก้ไข</n-alert>
          <n-form
            :model="formParams"
            :rules="rules"
            ref="formRef"
            label-placement="left"
            :label-width="100"
            v-if="isEditMenu"
            class="py-4"
          >
            <n-form-item label="กรอก" path="type">
              <span>{{ formParams.type === 1 ? 'เมนูแถบด้านล่าง' : '' }}</span>
            </n-form-item>
            <n-form-item label="ชื่อ" path="label">
              <n-input placeholder="กรุณาใส่ชื่อเรื่อง" v-model:value="formParams.label" />
            </n-form-item>
            <n-form-item label="คำบรรยาย" path="subtitle">
              <n-input placeholder="กรุณาใส่คำบรรยาย" v-model:value="formParams.subtitle" />
            </n-form-item>
            <n-form-item label="เส้นทาง" path="path">
              <n-input placeholder="กรุณาใส่เส้นทาง" v-model:value="formParams.path" />
            </n-form-item>
            <n-form-item label="วิธีการเปิด" path="openType">
              <n-radio-group v-model:value="formParams.openType" name="openType">
                <n-space>
                  <n-radio :value="1">หน้าต่างปัจจุบัน</n-radio>
                  <n-radio :value="2">หน้าต่างใหม่</n-radio>
                </n-space>
              </n-radio-group>
            </n-form-item>
            <n-form-item label="สิทธิ์เมนู" path="auth">
              <n-input placeholder="โปรดป้อนการอนุญาติ，สิทธิ์หลายรายการ，การแบ่งส่วน" v-model:value="formParams.auth" />
            </n-form-item>
            <n-form-item path="auth" style="margin-left: 100px">
              <n-space>
                <n-button type="primary" :loading="subLoading" @click="formSubmit"
                  >บันทึก</n-button
                >
                <n-button @click="handleReset">รีเซ็ต</n-button>
                <n-button @click="handleDel">ลบ</n-button>
              </n-space>
            </n-form-item>
          </n-form>
        </n-card>
      </n-gi>
    </n-grid>
    <CreateDrawer ref="createDrawerRef" :title="drawerTitle" />
  </div>
</template>
<script lang="ts" setup>
  import { ref, unref, reactive, onMounted, computed } from 'vue';
  import { useDialog, useMessage } from 'naive-ui';
  import { DownOutlined, AlignLeftOutlined, SearchOutlined, FormOutlined } from '@vicons/antd';
  import { getMenuList } from '@/api/system/menu';
  import { getTreeItem } from '@/utils';
  import CreateDrawer from './CreateDrawer.vue';

  const rules = {
    label: {
      required: true,
      message: 'กรุณาใส่ชื่อเรื่อง',
      trigger: 'blur',
    },
    path: {
      required: true,
      message: 'กรุณาใส่เส้นทาง',
      trigger: 'blur',
    },
  };

  const formRef: any = ref(null);
  const createDrawerRef = ref();
  const message = useMessage();
  const dialog = useDialog();

  let treeItemKey = ref([]);

  let expandedKeys = ref([]);

  const treeData = ref([]);

  const loading = ref(true);
  const subLoading = ref(false);
  const isEditMenu = ref(false);
  const treeItemTitle = ref('');
  const pattern = ref('');
  const drawerTitle = ref('');

  const isAddSon = computed(() => {
    return !treeItemKey.value.length;
  });

  const addMenuOptions = ref([
    {
      label: 'เพิ่มเมนูด้านบน',
      key: 'home',
      disabled: false,
    },
    {
      label: 'เพิ่มเมนูย่อย',
      key: 'son',
      disabled: isAddSon,
    },
  ]);

  const formParams = reactive({
    type: 1,
    label: '',
    subtitle: '',
    path: '',
    auth: '',
    openType: 1,
  });

  function selectAddMenu(key: string) {
    drawerTitle.value = key === 'home' ? 'เพิ่มแถบเมนูด้านบน' : `เพิ่มเมนูย่อย：${treeItemTitle.value}`;
    openCreateDrawer();
  }

  function openCreateDrawer() {
    const { openDrawer } = createDrawerRef.value;
    openDrawer();
  }

  function selectedTree(keys) {
    if (keys.length) {
      const treeItem = getTreeItem(unref(treeData), keys[0]);
      treeItemKey.value = keys;
      treeItemTitle.value = treeItem.label;
      Object.assign(formParams, treeItem);
      isEditMenu.value = true;
    } else {
      isEditMenu.value = false;
      treeItemKey.value = [];
      treeItemTitle.value = '';
    }
  }

  function handleDel() {
    dialog.info({
      title: 'แจ้งเตือน',
      content: `คุณแน่ใจหรือไม่ ว่าต้องการลบการตั้งค่านี้`,
      positiveText: 'ตกลง',
      negativeText: 'ยกเลิก',
      onPositiveClick: () => {
        message.success('ดำเนินการลบสำเร็จ');
      },
      onNegativeClick: () => {
        message.error('ยกเลิก');
      },
    });
  }

  function handleReset() {
    const treeItem = getTreeItem(unref(treeData), treeItemKey.value[0]);
    Object.assign(formParams, treeItem);
  }

  function formSubmit() {
    formRef.value.validate((errors: boolean) => {
      if (!errors) {
        message.error('ขออภัย คุณไม่มีสิทธิ์ทำรายการนี้');
      } else {
        message.error('กรุณากรอกข้อมูลให้ครบถ้วน');
      }
    });
  }

  function packHandle() {
    if (expandedKeys.value.length) {
      expandedKeys.value = [];
    } else {
      expandedKeys.value = unref(treeData).map((item: any) => item.key as string) as [];
    }
  }

  onMounted(async () => {
    const treeMenuList = await getMenuList();
    const keys = treeMenuList.list.map((item) => item.key);
    Object.assign(formParams, keys);
    treeData.value = treeMenuList.list;
    loading.value = false;
  });

  function onExpandedKeys(keys) {
    expandedKeys.value = keys;
  }
</script>
