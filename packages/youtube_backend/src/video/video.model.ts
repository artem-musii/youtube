/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface VideoModel extends Base {}

export class VideoModel extends TimeStamps {
	@prop()
	name: string;

	@prop()
	isPublic: boolean;

	@prop()
	description: string;

	@prop()
	thumbnailPath: string;

	@prop()
	videoPath: string;

	@prop({ default: 0 })
	viewsCount?: number;

	@prop({ default: 0 })
	likesCount?: number;

	@prop({ default: 0 })
	dislikesCount?: number;
}
