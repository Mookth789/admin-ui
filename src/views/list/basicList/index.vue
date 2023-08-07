<template>
  <n-card :bordered="false" class="proCard">
    <BasicForm @register="register" @submit="handleSubmit" @reset="handleReset">
      <template #statusSlot="{ model, field }">
        <n-input v-model:value="model[field]" />
      </template>
    </BasicForm>

    <BasicTable
      :columns="columns"
      :request="loadDataTable"
      :row-key="(row:ListData) => row.id"
      ref="actionRef"
      :actionColumn="actionColumn"
      @update:checked-row-keys="onCheckedRow"
      :scroll-x="1090"
    >
      <template #tableTitle>
        <n-button type="primary" @click="addTable">
          <template #icon>
            <n-icon>
              <PlusOutlined />
            </n-icon>
          </template>
          สร้างใหม่
        </n-button>
      </template>

      <template #toolbar>
        <n-button type="primary" @click="reloadTable">รีเฟรชข้อมูล</n-button>
      </template>
    </BasicTable>

    <n-modal v-model:show="showModal" :show-icon="false" preset="dialog" title="สร้างใหม่">
      <n-form
        :model="formParams"
        :rules="rules"
        ref="formRef"
        label-placement="left"
        :label-width="80"
        class="py-4"
      >
        <n-form-item label="ชื่อ" path="name">
          <n-input placeholder="กรุณาใส่ชื่อ" v-model:value="formParams.name" />
        </n-form-item>
        <n-form-item label="ที่อยู่" path="address">
          <n-input type="textarea" placeholder="กรุณากรอกที่อยู่" v-model:value="formParams.address" />
        </n-form-item>
        <n-form-item label="วันที่" path="date">
          <n-date-picker type="datetime" placeholder="กรุณาเลือกวันที่" v-model:value="formParams.date" />
        </n-form-item>
      </n-form>

      <template #action>
        <n-space>
          <n-button @click="() => (showModal = false)">ยกเลิก</n-button>
          <n-button type="info" :loading="formBtnLoading" @click="confirmForm">แน่นอน</n-button>
        </n-space>
      </template>
    </n-modal>
  </n-card>
</template>

<script lang="ts" setup>
  import { h, reactive, ref } from 'vue';
  // import { useMessage } from 'naive-ui';
  import { BasicTable, TableAction } from '@/components/Table';
  import { BasicForm, FormSchema, useForm } from '@/components/Form/index';
  import { getTableList } from '@/api/table/list';
  import { columns, ListData } from './columns';
  import { PlusOutlined } from '@vicons/antd';
  import { useRouter } from 'vue-router';
  import { type FormRules } from 'naive-ui';

  const rules: FormRules = {
    name: {
      required: true,
      trigger: ['blur', 'input'],
      message: 'กรุณาใส่ชื่อ',
    },
    address: {
      required: true,
      trigger: ['blur', 'input'],
      message: 'กรุณากรอกที่อยู่',
    },
    date: {
      type: 'number',
      required: true,
      trigger: ['blur', 'change'],
      message: 'กรุณาเลือกวันที่',
    },
  };

  const schemas: FormSchema[] = [
    {
      field: 'name',
      labelMessage: 'แจ้งเตือน',
      component: 'NInput',
      label: 'ชื่อ',
      componentProps: {
        placeholder: 'กรุณาพิมพ์ชื่อของคุณ',
        onInput: (e: any) => {
          console.log(e);
        },
      },
      rules: [{ required: true, message: 'กรุณาพิมพ์ชื่อของคุณ', trigger: ['blur'] }],
    },
    {
      field: 'mobile',
      component: 'NInputNumber',
      label: 'โทรศัพท์มือถือ',
      componentProps: {
        placeholder: 'กรุณากรอกหมายเลขโทรศัพท์',
        showButton: false,
        onInput: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'type',
      component: 'NSelect',
      label: 'พิมพ์',
      componentProps: {
        placeholder: 'กรุณาเลือกประเภท',
        options: [
          {
            label: 'ปลอบโยน',
            value: 1,
          },
          {
            label: 'เศรษฐกิจ',
            value: 2,
          },
        ],
        onUpdateValue: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'makeDate',
      component: 'NDatePicker',
      label: 'การนัดหมาย',
      defaultValue: 1183135260000,
      componentProps: {
        type: 'date',
        clearable: true,
        onUpdateValue: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'makeTime',
      component: 'NTimePicker',
      label: 'เวลาอยู่',
      componentProps: {
        clearable: true,
        onUpdateValue: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'status',
      label: 'สถานะ',
      //插槽
      slot: 'statusSlot',
    },
    {
      field: 'makeProject',
      component: 'NCheckbox',
      label: 'โครงการจอง',
      componentProps: {
        placeholder: 'กรุณาเลือกรายการจอง',
        options: [
          {
            label: 'รากฟันเทียม',
            value: 1,
          },
          {
            label: 'การอุดฟัน',
            value: 2,
          },
          {
            label: 'คลองรากฟัน',
            value: 3,
          },
        ],
        onUpdateChecked: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'makeSource',
      component: 'NRadioGroup',
      label: 'แหล่งที่มา',
      componentProps: {
        options: [
          {
            label: 'ออนไลน์',
            value: 1,
          },
          {
            label: 'ร้านค้า',
            value: 2,
          },
        ],
        onUpdateChecked: (e: any) => {
          console.log(e);
        },
      },
    },
  ];

  const router = useRouter();
  const formRef: any = ref(null);
  // const message = useMessage();
  const actionRef = ref();

  const showModal = ref(false);
  const formBtnLoading = ref(false);
  const formParams = reactive({
    name: '',
    address: '',
    date: null,
  });

  const params = ref({
    pageSize: 5,
    name: 'xiaoMa',
  });

  const actionColumn = reactive({
    width: 220,
    title: 'ดำเนินงาน',
    key: 'action',
    fixed: 'right',
    render(record) {
      return h(TableAction as any, {
        style: 'button',
        actions: [
          {
            label: 'ลบ',
            onClick: handleDelete.bind(null, record),
            // 根据业务控制是否显示 isShow 和 auth 是并且关系
            ifShow: () => {
              return true;
            },
            // 根据权限控制是否显示: 有权限，会显示，支持多个
            auth: ['basic_list'],
          },
          {
            label: 'แก้ไข',
            onClick: handleEdit.bind(null, record),
            ifShow: () => {
              return true;
            },
            auth: ['basic_list'],
          },
        ],
        dropDownActions: [
          {
            label: 'เปิดใช้งาน',
            key: 'enabled',
            // 根据业务控制是否显示: 非enable状态的不显示启用按钮
            ifShow: () => {
              return true;
            },
          },
          {
            label: 'ปิดใช้งาน',
            key: 'disabled',
            ifShow: () => {
              return true;
            },
          },
        ],
        select: (key) => {
          window['$message'].info(`คุณคลิก，${key} ปุ่ม`);
        },
      });
    },
  });

  const [register, {}] = useForm({
    gridProps: { cols: '1 s:1 m:2 l:3 xl:4 2xl:4' },
    labelWidth: 80,
    schemas,
  });

  function addTable() {
    showModal.value = true;
  }

  const loadDataTable = async (res) => {
    return await getTableList({ ...formParams, ...params.value, ...res });
  };

  function onCheckedRow(rowKeys) {
    console.log(rowKeys);
  }

  function reloadTable() {
    actionRef.value.reload();
  }

  function confirmForm(e) {
    e.preventDefault();
    formBtnLoading.value = true;
    formRef.value.validate((errors) => {
      if (!errors) {
        window['$message'].success('สร้างเรียบร้อยแล้ว');
        setTimeout(() => {
          showModal.value = false;
          reloadTable();
        });
      } else {
        window['$message'].error('กรุณากรอกข้อมูลให้ครบถ้วน');
      }
      formBtnLoading.value = false;
    });
  }

  function handleEdit(record: Recordable) {
    console.log('คลิกแก้ไข', record);
    router.push({ name: 'basic-info', params: { id: record.id } });
  }

  function handleDelete(record: Recordable) {
    console.log('คลิกลบ', record);
    window['$message'].info('คลิกลบ');
  }

  function handleSubmit(values: Recordable) {
    console.log(values);
    reloadTable();
  }

  function handleReset(values: Recordable) {
    console.log(values);
  }
</script>

<style lang="less" scoped></style>
