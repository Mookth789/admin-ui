<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="โต๊ะทำงาน">
        <n-grid cols="2 s:1 m:1 l:2 xl:2 2xl:2" responsive="screen">
          <n-gi>
            <div class="flex items-center">
              <div>
                <n-avatar circle :size="64" :src="schoolboy" />
              </div>
              <div>
                <p class="px-4 text-xl">สวัสดีตอนเช้า，แอดมิน，เริ่มต้นวันใหม่กันเถอะ！</p>
                <p class="px-4 text-gray-400">วันนี้มีเมฆมากและมีฝนตก อุณหภูมิ 15°C - 25°C อย่าลืมนำร่มมาด้วยเมื่อคุณออกไปข้างนอก</p>
              </div>
            </div>
          </n-gi>
          <n-gi>
            <div class="flex justify-end w-full">
              <div class="flex flex-1 flex-col justify-center text-right">
                <span class="text-secondary">จำนวนรายการ</span>
                <span class="text-2xl">16</span>
              </div>
              <div class="flex flex-1 flex-col justify-center text-right">
                <span class="text-secondary">กำลังจะมาถึง</span>
                <span class="text-2xl">3/15</span>
              </div>
              <div class="flex flex-1 flex-col justify-center text-right">
                <span class="text-secondary">ข้อมูล</span>
                <span class="text-2xl">35</span>
              </div>
            </div>
          </n-gi>
        </n-grid>
      </n-card>
    </div>
    <n-grid class="mt-4" cols="2 s:1 m:1 l:2 xl:2 2xl:2" responsive="screen" :x-gap="12" :y-gap="9">
      <n-gi>
        <n-card
          :segmented="{ content: true }"
          content-style="padding: 0;"
          :bordered="false"
          size="small"
          title="โครงการ"
        >
          <div class="flex flex-wrap project-card">
            <n-card
              size="small"
              class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3"
              hoverable
            >
              <div class="flex">
                <span>
                  <n-icon size="30">
                    <GithubOutlined />
                  </n-icon>
                </span>
                <span class="text-lg ml-4">Github</span>
              </div>
              <div class="flex mt-2 h-10 text-gray-400">
                เป็นแพลตฟอร์มโฮสติ้งสำหรับโครงการโอเพ่นซอร์สและซอฟต์แวร์ที่เป็นกรรมสิทธิ์
              </div>
              <div class="flex mt-2 h-10 text-gray-400"> 2021-07-04 </div>
            </n-card>
            <n-card
              size="small"
              class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3"
              hoverable
            >
              <div class="flex">
                <span>
                  <n-icon size="30" color="#42b983">
                    <LogoVue />
                  </n-icon>
                </span>
                <span class="text-lg ml-4">Vue</span>
              </div>
              <div class="flex mt-2 h-10 text-gray-400"> ความก้าวหน้า JavaScript กรอบ </div>
              <div class="flex mt-2 h-10 text-gray-400"> เรียนรู้แม้ว่าคุณจะไม่เคลื่อนไหว，2021-07-04 </div>
            </n-card>
            <n-card
              size="small"
              class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3"
              hoverable
            >
              <div class="flex">
                <span>
                  <n-icon size="30" color="#e44c27">
                    <Html5Outlined />
                  </n-icon>
                </span>
                <span class="text-lg ml-4">Html5</span>
              </div>
              <div class="flex mt-2 h-10 text-gray-400"> HTML5 เป็นมาตรฐานยุคใหม่ของอินเทอร์เน็ต。 </div>
              <div class="flex mt-2 h-10 text-gray-400"> การตะเกียกตะกายยังเป็นศิลปะ 2021-04-01 </div>
            </n-card>
            <n-card
              size="small"
              class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3"
              hoverable
            >
              <div class="flex">
                <span>
                  <n-icon size="30" color="#dd0031">
                    <LogoAngular />
                  </n-icon>
                </span>
                <span class="text-lg ml-4">Angular</span>
              </div>
              <div class="flex mt-2 h-10 text-gray-400"> แพลตฟอร์มการพัฒนาเว็บสมัยใหม่ที่มีแฟนๆ หลายล้านคน。 </div>
              <div class="flex mt-2 h-10 text-gray-400"> สุภาพบุรุษผงเหล็ก 2021-07-04。 </div>
            </n-card>
            <n-card
              size="small"
              class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3"
              hoverable
            >
              <div class="flex">
                <span>
                  <n-icon size="30" color="#61dafb">
                    <LogoReact />
                  </n-icon>
                </span>
                <span class="text-lg ml-4">React</span>
              </div>
              <div class="flex mt-2 h-10 text-gray-400"> สำหรับสร้างส่วนติดต่อผู้ใช้ JavaScript ห้องสมุด。 </div>
              <div class="flex mt-2 h-10 text-gray-400"> วัวเทคโนโลยี 2021-07-04。 </div>
            </n-card>
            <n-card
              size="small"
              class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3"
              hoverable
            >
              <div class="flex">
                <span>
                  <n-icon size="30">
                    <LogoJavascript />
                  </n-icon>
                </span>
                <span class="text-lg ml-4">Js</span>
              </div>
              <div class="flex mt-2 h-10 text-gray-400"> ถนนสร้างไม่ได้คิด。 </div>
              <div class="flex mt-2 h-10 text-gray-400"> กลุ่มสถาปัตยกรรม 2021-07-04 </div>
            </n-card>
          </div>
        </n-card>

        <n-card
          :segmented="{ content: true }"
          content-style="padding-top: 0;padding-bottom: 0;"
          :bordered="false"
          size="small"
          title="动态"
          class="mt-4"
        >
          <template #header-extra><a href="javascript:;">มากกว่า</a></template>
          <n-list>
            <n-list-item>
              <template #prefix>
                <n-avatar circle :size="40" :src="schoolboy" />
              </template>
              <n-thing title="แอดมิน เพิ่งเขียนแบบลวกๆ บนหน้าโต๊ะทำงาน ดังนั้นฉันจึงอ่านได้！">
                <template #description
                  ><p class="text-xs text-gray-500">2021-07-04 22:37:16</p></template
                >
              </n-thing>
            </n-list-item>
            <n-list-item>
              <template #prefix>
                <n-avatar circle :size="40" :src="schoolboy" />
              </template>
              <n-thing title="Ah Jung สร้างโครงการ naive-ui-admin ในกลุ่มโอเพ่นซอร์ส?">
                <template #description
                  ><p class="text-xs text-gray-500">2021-07-04 09:37:16</p></template
                >
              </n-thing>
            </n-list-item>
            <n-list-item>
              <template #prefix>
                <n-avatar circle :size="40" :src="schoolboy" />
              </template>
              <n-thing title="@อิทเจียเฟิงชิงหยาง ส่งข้อผิดพลาดไปยัง naive-ui-admin โปรดใช้เวลาในการตรวจสอบ！">
                <template #description
                  ><p class="text-xs text-gray-500">2021-07-04 22:37:16</p></template
                >
              </n-thing>
            </n-list-item>
            <n-list-item>
              <template #prefix>
                <n-avatar circle :size="40" :src="schoolboy" />
              </template>
              <n-thing title="รองเท้าเด็กในแผนกเทคนิคเตือนอีกครั้ง ห้ามจับปลา ห้ามจับปลา ห้ามจับปลา!">
                <template #description
                  ><p class="text-xs text-gray-500">2021-07-04 09:37:16</p></template
                >
              </n-thing>
            </n-list-item>
            <n-list-item>
              <template #prefix>
                <n-avatar circle :size="40" :src="schoolboy" />
              </template>
              <n-thing title="ปลาในที่ทำงาน กับ ปลาเค็ม ต่างกันยังไง (อันนี้ผมไม่ได้ว่านะครับ)！">
                <template #description
                  ><p class="text-xs text-gray-500">2021-07-04 20:37:16</p></template
                >
              </n-thing>
            </n-list-item>
            <n-list-item>
              <template #prefix>
                <n-avatar circle :size="40" :src="schoolboy" />
              </template>
              <n-thing title="อันที่จริง การสลับหน้ายังรองรับการแคชด้วย แต่ด้วยเอฟเฟกต์ที่มากเกินไป ดูเหมือนว่าจะแสดงผลซ้ำ">
                <template #description>
                  <p class="text-gray-400">
                    <n-input type="text" placeholder="ไม่เชื่อลองพิมพ์คำดูสิ" />
                  </p>
                </template>
              </n-thing>
            </n-list-item>
          </n-list>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card
          :segmented="{ content: true }"
          content-style="padding: 0;"
          :bordered="false"
          size="small"
          title="ทางลัด"
        >
          <div class="flex flex-wrap project-card">
            <n-card size="small" class="cursor-pointer project-card-item" hoverable>
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="#68c755">
                    <DashboardOutlined />
                  </n-icon>
                </span>
                <span class="text-lx text-center">คอนโซล</span>
              </div>
            </n-card>
            <n-card size="small" class="cursor-pointer project-card-item" hoverable>
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="#fab251">
                    <ProfileOutlined />
                  </n-icon>
                </span>
                <span class="text-lx text-center">รายการ</span>
              </div>
            </n-card>
            <n-card size="small" class="cursor-pointer project-card-item" hoverable>
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="#1890ff">
                    <FileProtectOutlined />
                  </n-icon>
                </span>
                <span class="text-lx text-center">รูปร่าง</span>
              </div>
            </n-card>
            <n-card size="small" class="cursor-pointer project-card-item" hoverable>
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="#f06b96">
                    <ApartmentOutlined />
                  </n-icon>
                </span>
                <span class="text-lx text-center">การจัดการผู้มีอำนาจ</span>
              </div>
            </n-card>
            <n-card size="small" class="cursor-pointer project-card-item" hoverable>
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="#7238d1">
                    <SettingOutlined />
                  </n-icon>
                </span>
                <span class="text-lx text-center">การจัดการระบบ</span>
              </div>
            </n-card>
            <n-card size="small" class="cursor-pointer project-card-item" hoverable>
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="">
                    <DashboardOutlined />
                  </n-icon>
                </span>
                <span class="text-lx text-center">คอนโซล</span>
              </div>
            </n-card>
          </div>
        </n-card>
        <n-card :segmented="{ content: true }" :bordered="false" size="small" class="mt-4">
          <img src="~@/assets/images/Business.svg" class="w-full" />
        </n-card>
      </n-gi>
    </n-grid>
  </div>
</template>

<script lang="ts" setup>
  import schoolboy from '@/assets/images/schoolboy.png';
  import {
    GithubOutlined,
    DashboardOutlined,
    ProfileOutlined,
    FileProtectOutlined,
    SettingOutlined,
    ApartmentOutlined,
    Html5Outlined,
  } from '@vicons/antd';
  import { LogoVue, LogoAngular, LogoReact, LogoJavascript } from '@vicons/ionicons5';
</script>

<style lang="less" scoped>
  .project-card {
    margin-right: -6px;

    &-item {
      margin: -1px;
      width: 33.333333%;
    }
  }
</style>
