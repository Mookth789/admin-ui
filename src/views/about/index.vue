<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="เกี่ยวกับ">
        {{ name }} มีพื้นฐานมาจาก vue3，vite2，TypeScript
        โซลูชันสำนักงานกลางและส่วนหลังซึ่งสามารถช่วยคุณสร้างโครงการสำนักงานระดับกลางและส่วนหลังระดับองค์กรได้อย่างรวดเร็ว เชื่อว่าไม่ว่าจะมาจากการใช้เทคโนโลยีใหม่หรือด้านอื่น ๆ จะสามารถช่วยคุณและอัปเดตต่อไปได้
      </n-card>
    </div>
    <n-card
      :bordered="false"
      title="ข้อมูลโครงการ"
      class="mt-4 proCard"
      size="small"
      :segmented="{ content: true }"
    >
      <n-descriptions bordered label-placement="left" class="py-2">
        <n-descriptions-item label="รุ่น">
          <n-tag type="info"> {{ version }} </n-tag>
        </n-descriptions-item>
        <n-descriptions-item label="version">
          <n-tag type="info"> {{ lastBuildTime }} </n-tag>
        </n-descriptions-item>
        <n-descriptions-item label="ที่อยู่เอกสาร">
          <div class="flex items-center">
            <a href="https://docs.naiveadmin.com" class="py-2" target="_blank">ดูที่อยู่เอกสาร</a>
          </div>
        </n-descriptions-item>
        <n-descriptions-item label="ดูตัวอย่างที่อยู่">
          <div class="flex items-center">
            <a href="https://v1.naiveadmin.com" class="py-2" target="_blank">ดูตัวอย่างที่อยู่</a>
          </div>
        </n-descriptions-item>
        <n-descriptions-item label="Github">
          <div class="flex items-center">
            <a href="https://github.com/jekip/naive-ui-admin" class="py-2" target="_blank"
              >ดูที่อยู่ Github</a
            >
          </div>
        </n-descriptions-item>
        <n-descriptions-item label="กลุ่มแลกเปลี่ยน QQ">
          <div class="flex items-center">
            <a href="https://jq.qq.com/?_wv=1027&k=xib9dU4C" class="py-2" target="_blank"
              >คลิกลิงก์เพื่อเข้าร่วมแชทกลุ่ม【Naive Admin】</a
            >
          </div>
        </n-descriptions-item>
      </n-descriptions>
    </n-card>

    <n-card
      :bordered="false"
      title="การพึ่งพาสภาพแวดล้อมการพัฒนา"
      class="mt-4 proCard"
      size="small"
      :segmented="{ content: true }"
    >
      <n-descriptions bordered label-placement="left" class="py-2">
        <n-descriptions-item v-for="item in devSchema" :key="item.field" :label="item.field">
          {{ item.label }}
        </n-descriptions-item>
      </n-descriptions>
    </n-card>

    <n-card
      :bordered="false"
      title="การพึ่งพาสภาพแวดล้อมการผลิต"
      class="mt-4 proCard"
      size="small"
      :segmented="{ content: true }"
    >
      <n-descriptions bordered label-placement="left" class="py-2">
        <n-descriptions-item v-for="item in schema" :key="item.field" :label="item.field">
          {{ item.label }}
        </n-descriptions-item>
      </n-descriptions>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
  export interface schemaItem {
    field: string;
    label: string;
  }

  const { pkg, lastBuildTime } = __APP_INFO__;
  const { dependencies, devDependencies, name, version } = pkg;

  const schema: schemaItem[] = [];
  const devSchema: schemaItem[] = [];

  Object.keys(dependencies).forEach((key) => {
    schema.push({ field: key, label: dependencies[key] });
  });

  Object.keys(devDependencies).forEach((key) => {
    devSchema.push({ field: key, label: devDependencies[key] });
  });
</script>

<style lang="less" scoped></style>
