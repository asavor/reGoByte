// @generated by protoc-gen-es v2.1.0 with parameter "target=ts"
// @generated from file instagram/v1/instagram.proto (package instagram.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file instagram/v1/instagram.proto.
 */
export const file_instagram_v1_instagram: GenFile = /*@__PURE__*/
  fileDesc("ChxpbnN0YWdyYW0vdjEvaW5zdGFncmFtLnByb3RvEgxpbnN0YWdyYW0udjEiKwoXR2V0VXNlckZvbGxvd2Vyc1JlcXVlc3QSEAoIdXNlcm5hbWUYASABKAkiGgoYR2V0VXNlckZvbGxvd2Vyc1Jlc3BvbnNlMnUKEEluc3RhZ3JhbVNlcnZpY2USYQoQR2V0VXNlckZvbGxvd2VycxIlLmluc3RhZ3JhbS52MS5HZXRVc2VyRm9sbG93ZXJzUmVxdWVzdBomLmluc3RhZ3JhbS52MS5HZXRVc2VyRm9sbG93ZXJzUmVzcG9uc2VCO1o5Z2l0aHViLmNvbS9XYWxkby1DYXJkL3Byb3Rvcy9hcGkvYnVpbGQvZ28vc3luYy92MTtzeW5jX3YxYgZwcm90bzM");

/**
 * @generated from message instagram.v1.GetUserFollowersRequest
 */
export type GetUserFollowersRequest = Message<"instagram.v1.GetUserFollowersRequest"> & {
  /**
   * @generated from field: string username = 1;
   */
  username: string;
};

/**
 * Describes the message instagram.v1.GetUserFollowersRequest.
 * Use `create(GetUserFollowersRequestSchema)` to create a new message.
 */
export const GetUserFollowersRequestSchema: GenMessage<GetUserFollowersRequest> = /*@__PURE__*/
  messageDesc(file_instagram_v1_instagram, 0);

/**
 * @generated from message instagram.v1.GetUserFollowersResponse
 */
export type GetUserFollowersResponse = Message<"instagram.v1.GetUserFollowersResponse"> & {
};

/**
 * Describes the message instagram.v1.GetUserFollowersResponse.
 * Use `create(GetUserFollowersResponseSchema)` to create a new message.
 */
export const GetUserFollowersResponseSchema: GenMessage<GetUserFollowersResponse> = /*@__PURE__*/
  messageDesc(file_instagram_v1_instagram, 1);

/**
 * @generated from service instagram.v1.InstagramService
 */
export const InstagramService: GenService<{
  /**
   * @generated from rpc instagram.v1.InstagramService.GetUserFollowers
   */
  getUserFollowers: {
    methodKind: "unary";
    input: typeof GetUserFollowersRequestSchema;
    output: typeof GetUserFollowersResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_instagram_v1_instagram, 0);

