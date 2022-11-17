import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

// import { Exclude } from 'class-transformer';

export type UserDocumnet = HydratedDocument<User> & {};

@Schema()
export class User {
  @Prop({ type: String, index: true, required: true, unique: true })
  userId: string;

  @Prop({
    type: String,
    index: true,
    lowercase: true,
    required: true,
    trim: true,
    unique: true,
  })
  email: string;

  @Prop({ type: String, required: true, select: false, index: true })
  instantToken: string;

  @Prop({ type: String, index: true, default: 'User' })
  nickname: string;

  @Prop({ type: mongoose.Schema.Types.Mixed, select: false })
  temporaryToken: string;

  @Prop({ type: String })
  thumbnail: string;

  @Prop({ type: String, required: true, select: false })
  token: string;

  @Prop({ type: Date, default: Date.now, index: true })
  createdAt: Date;

  @Prop({ type: Boolean, default: false })
  eulaAgreed: boolean;

  @Prop({ type: Boolean, default: false })
  eulaIOSAgreed: boolean;

  @Prop({ type: Boolean, default: false })
  imagewatchSynced: boolean;

  @Prop({ type: Boolean, default: false, select: false, index: true })
  isInactive: boolean;

  @Prop({ type: Boolean, default: false })
  sellable: boolean;

  @Prop({ type: Boolean, default: false })
  google: boolean;

  @Prop({ type: Boolean, default: false })
  facebook: boolean;

  @Prop({ type: Boolean, default: false })
  apple: boolean;

  @Prop({ type: Boolean, default: false })
  line: boolean;

  @Prop({ type: Boolean, default: false })
  kakao: boolean;

  @Prop({ type: Date })
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
