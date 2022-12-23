import { UseCase } from '@core/common/use-case/use-case.common';
import { GetUserPort } from '@core/domain/user/port/use-case/get-user.port';
import { UserUseCaseDto } from './dtos/UserUseCaseDto';

export interface GetUserUseCase extends UseCase<GetUserPort, UserUseCaseDto> {}
