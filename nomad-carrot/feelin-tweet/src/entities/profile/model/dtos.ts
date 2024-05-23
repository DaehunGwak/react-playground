export interface UserDto {
  readonly email: string;
  readonly createdAt: string;
}

export interface ProfileDto {
  readonly nickname: string;
  readonly imageUrl: string | null
}