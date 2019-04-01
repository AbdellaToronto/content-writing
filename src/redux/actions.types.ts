import {Action} from "redux";
import {TopicDraft} from "../interfaces/topic";

export enum TOPIC_TYPES {
  UPDATE_TOPIC_DRAFT = 'UPDATE_TOPIC_DRAFT'
}


export interface AppAction<T, U> extends Action {
  type: T,
  payload: U
}

export interface UpdateTopicAction extends AppAction<TOPIC_TYPES.UPDATE_TOPIC_DRAFT, TopicDraft> {}