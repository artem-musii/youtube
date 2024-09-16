/* eslint-disable @typescript-eslint/no-empty-object-type */
/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface UserModel extends Base {
	one: string;
}

export class UserModel extends TimeStamps {
	@prop({ unique: true })
	name: string;

	@prop({ unique: true })
	email: string;

	@prop()
	password: string;

	@prop()
	isVerified: boolean;

	@prop()
	location: string;

	@prop()
	description: string;

	@prop()
	subscribersCount: number;

	@prop()
	bannerPath: string;

	@prop()
	avatarPath: string;
}
