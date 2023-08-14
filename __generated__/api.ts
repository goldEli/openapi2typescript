/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** FlowReFieldVo */
export interface FlowReFieldVo {
  /** 权限标识情况(readOnly为只读;editable为可编辑;hidden为隐藏) */
  auth?: string;
  /** 套件默认系统字段code 不为空则说明是套件字段 */
  code?: string;
  /** 是否有数据配置 */
  dataConfig?: boolean;
  /** 数据配置 */
  dataContext?: FlowGradeDataVo[];
  /** 日期是否为下拉 1是 0否 */
  dateType?: boolean;
  /**
   * 小数点位数值
   * @format int32
   */
  decimalNum?: number;
  /** 默认值 */
  defaultValue?: string;
  /** 是否展示部门类型 1是 0否 */
  deptType?: boolean;
  /** 说明文字值 */
  descTextVal?: string;
  /** 是否参与打印 1是 0否 */
  enablePrint?: boolean;
  /** YMD年月日 YMDHS年月日时分 */
  format?: string;
  /** 是否有小数点 1是 0否 */
  hasDecimal?: boolean;
  /** 是否有默认值 1是 0否 */
  hasDefault?: boolean;
  /** 是否有说明文字 1是 0否 */
  hasDesc?: boolean;
  /** 是否有标题 1是 0否 */
  hasTitle?: boolean;
  /** 是否有单位 1是 0否 */
  hasUnit?: boolean;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 审批界面是否展示 1是 0否 */
  isShowOnScreen?: boolean;
  /** 是否展示标题 1是 0否 */
  isShowTitle?: boolean;
  /** 是否自动校验 1是 0否 */
  isValidate?: boolean;
  /** 套件类型 */
  kitType?: string;
  /** 是否多标题 1是 0否 */
  multipleTitle?: boolean;
  /** 单选多选的选项 */
  options?: string[];
  /** 手机类型 phone手机 */
  phoneType?: string;
  /** 是否有提示文字 1是 0否 */
  placeholder?: boolean;
  /** 提示文字 */
  placeholderVal?: string;
  /** 是否必填 1是 0否 */
  required?: boolean;
  /** one选择一个 muti选择多个 */
  selectType?: string;
  /** 是否转换为大小写 1是 0否 */
  showChinese?: boolean;
  /** 是否自动计算时长 1是 0否 */
  showLength?: boolean;
  /** 是否代他人提交 false 否  true 是 */
  submitBehalfOfOthers?: boolean;
  /** 字段名称 */
  titleValue?: string;
  /** 多标题值 */
  titleValues?: string[];
  /** TextInput单行输入框 TextareaInput多行输入框 NumberInput数字输入框 SelectInput单选框 MultipleSelect多选框 Date日期 DateRange日期区间 Description说明文字 IDCard身份证 Phone电话 Money金额 Dept部门 Img图片 Attach附件 Concat联系人 Grade级联/分类 */
  type: string;
  /** 单位值 */
  unitValue?: string;
}

/** FlowGradeDataVo */
export interface FlowGradeDataVo {
  /** 子节点 */
  children?: FlowGradeDataVo[];
  /** 分类编号 */
  code?: string;
  /**
   * 主键
   * @format int64
   */
  id?: number;
  /** 分类名称 */
  name?: string;
}

/** R«List«FlowReFieldVo»» */
export interface RListFlowReFieldVo {
  /**
   * 错误码：0成功，其他失败
   * @format int32
   */
  code?: number;
  /** 返回值 */
  data?: FlowReFieldVo[];
  /** 错误信息 */
  msg?: string;
}

export interface GetFieldUsingGetParams {
  /**
   * 流程id
   * @format int64
   */
  processId: number;
}

type RequestParams = any;

/**
 * No description
 *
 * @tags 用户端-字段定义-静态
 * @name GetFieldUsingGet
 * @summary 表单字段定义查询-静态数据
 * @request GET:/flow/flowReField/getField
 */
export const getFieldUsingGet = (query: GetFieldUsingGetParams, params: RequestParams = {}) =>
  window.requestMethod<RListFlowReFieldVo, void>({
    url: `/flow/flowReField/getField`,
    method: "GET",
    data: query,
    ...params,
  });
