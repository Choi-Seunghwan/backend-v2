import _ from 'lodash';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { TARGET_DEVICES } from 'src/constatns/watch.constant';
import { User } from 'src/user/schema/user.schema';

export type WatchDocument = HydratedDocument<Watch>;

@Schema()
export class Watch extends mongoose.Document {
  @Prop({ index: true, required: true, trim: true, unique: true })
  appId: string;

  @Prop({ required: true, trim: true })
  appName: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  author: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category', index: true })
  category: mongoose.Schema.Types.ObjectId;

  @Prop({
    colors: {
      type: [[Number, Number, Number]],
      index: true,
    },
    palette: {
      type: mongoose.Schema.Types.Mixed,
    },
  })
  colors: mongoose.Schema.Types.Mixed;

  @Prop({ type: String, default: '' })
  description: number;

  @Prop({ type: mongoose.Schema.Types.Mixed })
  components: mongoose.Schema.Types.Mixed;

  @Prop({ type: Number, default: 0 })
  detailViewCount: number;

  @Prop({
    modelName: {
      type: String,
      enum: TARGET_DEVICES,
      index: true,
      required: true,
    },

    modelVariation: {
      type: String,
      required: true,
    },

    shape: {
      type: Number, // 0: circular, 1: square, 2: rectangular
      index: true,
      required: true,
    },
  })
  device: mongoose.Schema.Types.Mixed;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'DisplaySell' })
  displaySell: mongoose.Schema.Types.ObjectId;

  @Prop({ type: mongoose.Schema.Types.ObjectId })
  elements: mongoose.Schema.Types.ObjectId;

  @Prop({
    type: [{ type: String }],
    index: true,
    set: (v) => _.uniq(v.map((value) => value.trim().toLowerCase())),
  })
  hashtags: string;

  @Prop({
    type: Number,
    default: 0,
  })
  favoriteCount: number;

  @Prop({ type: mongoose.Schema.Types.Mixed })
  images: mongoose.Schema.Types.Mixed;

  @Prop({
    height: {
      type: Number,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
  })
  resolution: mongoose.Schema.Types.Mixed;

  @Prop({ type: [{ type: String }], default: [] })
  resources;

  @Prop({ type: mongoose.Schema.Types.Mixed })
  subDials;

  @Prop({
    type: String,
    enum: TARGET_DEVICES,
    index: true,
    required: true,
  })
  targetDevice;

  @Prop({ type: Number, default: 1 })
  version: number;

  @Prop({ type: Number, default: 0 })
  watchCommentCount: number;

  @Prop({ type: Number, default: 0 })
  watchSentCount: number;

  @Prop({ type: Boolean, default: false })
  editable: boolean;

  @Prop({ type: Boolean, default: false, index: true, select: false })
  isInactive: boolean;

  @Prop({ type: Boolean, default: false })
  isDisplay: boolean;

  @Prop({ type: Boolean, default: false, index: true })
  isPhotoWatch: boolean;

  @Prop({ type: Boolean, default: false, index: true })
  private: boolean;

  @Prop({ type: Boolean, default: false, index: true })
  purchasable: boolean;

  @Prop({ type: Date, default: Date.now, index: true })
  updatedAt: Date;

  @Prop({ type: Date, default: Date.now, index: true, required: true })
  createdAt: Date;
}

export const WatchSchema = SchemaFactory.createForClass(Watch);
