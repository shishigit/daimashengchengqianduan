/**
 * 当前系统支持的数据库类型
 */
export const shujukuleixing_list = ['mysql', 'mariadb'] as const
export type shujukuleixing_type = (typeof shujukuleixing_list)[number]
