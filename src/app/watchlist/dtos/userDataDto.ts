import { userDescriptionDto } from "./userDescriptionDto";
import { userFavoritesDto } from "./userFavoritesDto";
import { userHistoryDto } from "./userHistoryDto"
import { userStatisticsDto } from "./userStatisticsDto"

export class userDataDto {
    userDescription: userDescriptionDto;
    userFavorites: userFavoritesDto[];
    userHistory: userHistoryDto[];
    userStatistics:userStatisticsDto;
  }
  