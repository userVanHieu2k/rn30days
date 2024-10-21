import {PayloadAction, createSlice} from '@reduxjs/toolkit';

const initialState: CommentState = {
  data: null,
  loading: false,
  error: null,
};

export interface CommentState {
  data: Comment | null;
  loading: boolean;
  error: string | null;
}

interface Comment {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const CommentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    saveCommentStart: (state) => {
    },
    saveComment: (state, action) => {
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    },
    error: (state, action) => {
      return {
        ...state, error: action.payload, loading: false
      }
    },
  },
});

export const {saveCommentStart, saveComment} = CommentSlice.actions;
export default CommentSlice.reducer;