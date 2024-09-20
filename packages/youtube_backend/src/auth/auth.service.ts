import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { UserModel } from 'src/user/user.model';
import { AuthDto } from './auth.dto';
import { compare, genSalt, hash } from 'bcryptjs';

@Injectable()
export class AuthService {
	constructor(
		private readonly jwtService: JwtService,
		@InjectModel(UserModel)
		private readonly UserModel: ModelType<UserModel>
	) {}

	async login(dto: AuthDto) {
		const user = await this.validateUser(dto);

		return {
			user: this.returnUserFields(user),
			accessToken: await this.issueAccessToken(String(user._id))
		};
	}

	async register(dto: AuthDto) {
		const oldUser = await this.UserModel.findOne({ email: dto.email });

		if (oldUser) {
			throw new UnauthorizedException('User already exists');
		}

		const salt = await genSalt(10);

		const newUser = new this.UserModel({
			email: dto.email,
			password: await hash(dto.password, salt)
		});

		const user = await newUser.save();

		return {
			user: this.returnUserFields(user),
			accessToken: await this.issueAccessToken(String(user._id))
		};
	}

	async validateUser(dto: AuthDto) {
		const user = await this.UserModel.findOne({ email: dto.email });

		if (!user) {
			throw new UnauthorizedException('User not found');
		}

		const isCorrectPassword = await compare(dto.password, user.password);

		if (!isCorrectPassword) {
			throw new UnauthorizedException('Invalid password');
		}

		return user;
	}

	async issueAccessToken(userId: string) {
		return await this.jwtService.signAsync(
			{ _id: userId },
			{ expiresIn: '31d' }
		);
	}

	returnUserFields(user: UserModel) {
		return {
			email: user.email,
			_id: user._id
		};
	}
}
