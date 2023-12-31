const mongoose = require("mongoose");

const liveUserSchema = new mongoose.Schema(
  {
    name: String,
    country: String,
    image: String,
    view: { type: Array, default: [] },
    age: Number,
    seat: {
      type: [
        {
          position: { type: Number },
          mute: { type: Boolean },
          lock: { type: Boolean },
          isSpeaking: { type: Boolean },
          reserved: { type: Boolean },
          invite: { type: Boolean },
          userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          },
          name: { type: String },
          image: { type: String },
          country: { type: String },
          agoraUid: { type: Number },
        },
      ],
      default: [
        {
          position: 0,
          mute: false,
          lock: false,
          reserved: false,
          isSpeaking: false,
          invite: false,
          userId: null,
          name: null,
          image: null,
          country: null,
          agoraUid: null,
        },
        {
          position: 1,
          mute: false,
          lock: false,
          reserved: false,
          isSpeaking: false,
          invite: false,
          userId: null,
          name: null,
          image: null,
          country: null,
          agoraUid: null,
        },
        {
          position: 2,
          mute: false,
          lock: false,
          reserved: false,
          isSpeaking: false,
          invite: false,
          userId: null,
          name: null,
          image: null,
          country: null,
          agoraUid: null,
        },
        {
          position: 3,
          mute: false,
          lock: false,
          reserved: false,
          isSpeaking: false,
          invite: false,
          userId: null,
          name: null,
          image: null,
          country: null,
          agoraUid: null,
        },
        {
          position: 4,
          mute: false,
          lock: false,
          reserved: false,
          isSpeaking: false,
          invite: false,
          userId: null,
          name: null,
          image: null,
          country: null,
          agoraUid: null,
        },
        {
          position: 5,
          mute: false,
          lock: false,
          reserved: false,
          isSpeaking: false,
          invite: false,
          userId: null,
          name: null,
          image: null,
          country: null,
          agoraUid: null,
        },
        {
          position: 6,
          mute: false,
          lock: false,
          reserved: false,
          isSpeaking: false,
          invite: false,
          userId: null,
          name: null,
          image: null,
          country: null,
          agoraUid: null,
        },
        {
          position: 7,
          mute: false,
          lock: false,
          reserved: false,
          isSpeaking: false,
          invite: false,
          userId: null,
          name: null,
          image: null,
          country: null,
          agoraUid: null,
        },
        {
          position: 8,
          mute: false,
          lock: false,
          reserved: false,
          isSpeaking: false,
          invite: false,
          userId: null,
          name: null,
          image: null,
          country: null,
          agoraUid: null,
        },
        {
          position: 9,
          mute: false,
          lock: false,
          reserved: false,
          isSpeaking: false,
          invite: false,
          userId: null,
          name: null,
          image: null,
          country: null,
          agoraUid: null,
        },
      ],
    },
    token: String,
    channel: String,
    rCoin: Number,
    diamond: Number,
    username: String,
    background: String,
    isVIP: Boolean,
    liveUserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    agoraUID: { type: Number, default: 0 },
    liveStreamingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "livestreaminghistories",
    },
    isPublic: { type: Boolean, default: true },
    audio: { type: Boolean, default: false },
    expiration_date: { type: Date, required: true, expires: 0 },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("LiveUser", liveUserSchema);
