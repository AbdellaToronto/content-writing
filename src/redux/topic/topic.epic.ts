import {ofType} from "redux-observable";
import {TOPIC_TYPES, UpdateTopicAction} from "../actions.types";
import {map, switchMap} from "rxjs/operators";
import {EpicType} from "../epics";

export const updateTopicDraft: EpicType<UpdateTopicAction> = ($action, _, {firebase}) =>
  $action.pipe(
    ofType(TOPIC_TYPES.UPDATE_TOPIC_DRAFT),
    switchMap(({payload}) => firebase.save(payload)),
    map((x: any) => x)
  );