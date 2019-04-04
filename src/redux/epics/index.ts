import {ActionsObservable, combineEpics, createEpicMiddleware} from "redux-observable";
import {ajax} from "rxjs/ajax";
import {Observable} from "rxjs";
import {Action} from "redux";
import {updateTopicDraft} from "../topic/topic.epic";
import {of} from "rxjs/internal/observable/of";

interface EpicMiddlewareDependencies {
  ajax: any;
  firebase: { save: any };
}

export const rootEpic = combineEpics(
  updateTopicDraft
);

export const epicMiddleware = createEpicMiddleware({
  dependencies: {
    ajax,
    firebase: {save: (x) => of(x)}
  }
});

export type EpicType<A extends Action> = (action: ActionsObservable<A>, state: any, dependencies: EpicMiddlewareDependencies) => Observable<Action>;
