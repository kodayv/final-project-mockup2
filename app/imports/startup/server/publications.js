import { Interests } from '/imports/api/interest/InterestCollection';
import { Profiles } from '/imports/api/profile/ProfileCollection';
import { Categories } from '/imports/api/categories/CategoryCollection';
import { Games } from '/imports/api/games/GameCollection';

Interests.publish();
Profiles.publish();
Categories.publish();
Games.publish();