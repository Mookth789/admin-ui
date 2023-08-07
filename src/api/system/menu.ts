import { http } from '@/utils/http/axios';

/**
 * @description: รับเมนูผู้ใช้ตามรหัสผู้ใช้
 */
export function adminMenus() {
  return http.request({
    url: '/menus',
    method: 'GET',
  });
}

/**
 * 获取tree菜单列表
 * @param params
 */
export function getMenuList(params?) {
  return http.request({
    url: '/menu/list',
    method: 'GET',
    params,
  });
}
