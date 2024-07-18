import { IsNotEmpty, IsString } from 'class-validator';

export class BaseUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;
}
