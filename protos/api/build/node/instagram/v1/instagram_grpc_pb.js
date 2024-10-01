// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var instagram_v1_instagram_pb = require('../../instagram/v1/instagram_pb.js');

function serialize_instagram_v1_GetUserFollowersRequest(arg) {
  if (!(arg instanceof instagram_v1_instagram_pb.GetUserFollowersRequest)) {
    throw new Error('Expected argument of type instagram.v1.GetUserFollowersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_instagram_v1_GetUserFollowersRequest(buffer_arg) {
  return instagram_v1_instagram_pb.GetUserFollowersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_instagram_v1_GetUserFollowersResponse(arg) {
  if (!(arg instanceof instagram_v1_instagram_pb.GetUserFollowersResponse)) {
    throw new Error('Expected argument of type instagram.v1.GetUserFollowersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_instagram_v1_GetUserFollowersResponse(buffer_arg) {
  return instagram_v1_instagram_pb.GetUserFollowersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var InstagramServiceService = exports.InstagramServiceService = {
  getUserFollowers: {
    path: '/instagram.v1.InstagramService/GetUserFollowers',
    requestStream: false,
    responseStream: false,
    requestType: instagram_v1_instagram_pb.GetUserFollowersRequest,
    responseType: instagram_v1_instagram_pb.GetUserFollowersResponse,
    requestSerialize: serialize_instagram_v1_GetUserFollowersRequest,
    requestDeserialize: deserialize_instagram_v1_GetUserFollowersRequest,
    responseSerialize: serialize_instagram_v1_GetUserFollowersResponse,
    responseDeserialize: deserialize_instagram_v1_GetUserFollowersResponse,
  },
};

exports.InstagramServiceClient = grpc.makeGenericClientConstructor(InstagramServiceService);
