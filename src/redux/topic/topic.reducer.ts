import {Reducer} from "redux";

interface TopicDraft {

}

export const reducer: Reducer<any> = (state = {}, {type, payload}) => {
  switch (type) {
    case 'UPDATE_TOPIC_DRAFT':
      return {
        ...state,
        currentTopicDraft: payload
      };
    default:
      return state
  }
};