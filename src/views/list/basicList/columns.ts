import { h } from 'vue';
import { NAvatar } from 'naive-ui';
import { BasicColumn } from '@/components/Table';
export interface ListData {
  id: string;
  name: string;
  avatar: string;
  address: string;
  beginTime: string;
  endTime: string;
  date: string;
}
export const columns: BasicColumn<ListData>[] = [
  {
    title: 'id',
    key: 'id',
    width: 100,
  },
  {
    title: 'ชื่อ',
    key: 'name',
    width: 100,
  },
  {
    title: 'สัญลักษณ์',
    key: 'avatar',
    width: 100,
    render(row) {
      return h(NAvatar, {
        size: 48,
        src: row.avatar,
      });
    },
  },
  {
    title: 'ที่อยู่',
    key: 'address',
    auth: ['basic_list'], // 同时根据权限控制是否显示
    ifShow: (_column) => {
      return true; // 根据业务控制是否显示
    },
    width: 150,
  },
  {
    title: 'วันที่เริ่มต้น',
    key: 'beginTime',
    width: 160,
  },
  {
    title: 'วันที่สิ้นสุด',
    key: 'endTime',
    width: 160,
  },
  {
    title: 'เวลาในการสร้าง',
    key: 'date',
    width: 100,
  },
];
