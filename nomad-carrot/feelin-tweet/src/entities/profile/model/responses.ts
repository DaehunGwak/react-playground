import {Profile} from "@prisma/client";
import {User} from "@supabase/auth-js";
import {FeelinResponse} from "@/src/shared/model/response";
import {ProfileDto, UserDto} from "@/src/entities/profile";

export interface UserResponse {
  readonly user: UserDto;
  readonly profile: ProfileDto | null;
}

export class UserResponseFactory {
  static from(user: User, profile?: Profile | null): FeelinResponse<UserResponse> {
    return {
      result: {
        user: {
          email: user.email!,
          createdAt: user.created_at
        },
        profile: profile ? {
          nickname: profile.nickname,
          imageUrl: profile.imageUrl,
        } : null,
      },
    };
  }

  static notFound(): FeelinResponse<never> {
    return {
      error: "user not found",
    };
  }
}


