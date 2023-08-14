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

/** FlowReQueryApproverDto */
export interface FlowReQueryApproverDto {
  /**
   * node节点id
   * @format int64
   */
  nodeId: number;
  /**
   * 流程id
   * @format int64
   */
  processId: number;
}

/** NodeUserBaseVo */
export interface NodeUserBaseVo {
  /**
   * 审批人ID
   * @format int64
   */
  approverId?: number;
  /** 头像 */
  avatar?: string;
  /**
   * 用户Id
   * @format int64
   */
  id?: number;
  /** 姓名 */
  name?: string;
}

/** R«List«NodeUserBaseVo»» */
export interface RListNodeUserBaseVo {
  /**
   * 错误码：0成功，其他失败
   * @format int32
   */
  code?: number;
  /** 返回值 */
  data?: NodeUserBaseVo[];
  /** 错误信息 */
  msg?: string;
}

type RequestParams = any;

/**
 * No description
 *
 * @tags 用户端-审批已发起流程信息表-静态
 * @name QueryApproverUsingPost
 * @summary 发起人通过流程ID与节点ID查询审批人信息(发起人自选数据)
 * @request POST:/flow/flowReProcessUser/queryApprover
 */
export const queryApproverUsingPostFlow = (queryApproverDto: FlowReQueryApproverDto, params: RequestParams = {}) =>
  requestMethod<RListNodeUserBaseVo, void>({
    path: `/flow/flowReProcessUser/queryApprover`,
    method: "POST",
    body: queryApproverDto,
    ...params,
  });
