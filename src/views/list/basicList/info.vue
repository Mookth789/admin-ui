<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="รายละเอียดเบื้องต้น"> รายละเอียดพื้นฐาน บางครั้งใช้เพื่อแสดงข้อมูลแบบอ่านอย่างเดียว。 </n-card>
    </div>
    <n-card :bordered="false" class="proCard mt-4" size="small" :segmented="{ content: true }">
      <n-descriptions label-placement="left" class="py-2">
        <n-descriptions-item>
          <template #label>ชื่อผู้รับเงิน</template>
          อาจูน
        </n-descriptions-item>
        <n-descriptions-item label="ลูกหนี้การค้า">NaiveUiAdmin@qq.com</n-descriptions-item>
        <n-descriptions-item label="ประเภทการชำระเงิน">อาลีเพย์</n-descriptions-item>
        <n-descriptions-item label="บัญชีการชำระเงิน">NaiveUiAdmin@163.com</n-descriptions-item>
        <n-descriptions-item label="ยอดโอน">￥1980.00</n-descriptions-item>
        <n-descriptions-item label="สถานะ">
          <n-tag type="success"> มาถึงแล้ว</n-tag>
        </n-descriptions-item>
      </n-descriptions>
    </n-card>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    setup() {
      return {};
    },
  });
</script>

<style lang="less" scoped></style>
