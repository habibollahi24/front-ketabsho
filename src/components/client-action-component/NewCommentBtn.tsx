'use client';
import { useEffect, useState } from 'react';
import { MessageCircleHeart } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { useFormState } from 'react-dom';
import { addNewComment } from '@/services/server/actions/actions';
import toast from 'react-hot-toast';
import SubmitCommentBtn from './SubmitCommentBtn';

type Props = {
  blogId: string;
};

const initialState = {
  sucssesMsg: '',
  errorMsg: '',
};

export default function NewCommentBtn({ blogId }: Props) {
  const [open, setOpen] = useState(false);
  const [state, formAction] = useFormState(
    addNewComment,
    initialState
  );

  useEffect(() => {
    if (state.errorMsg) toast.error(state.errorMsg);
    if (state.sucssesMsg) {
      toast.success(state.sucssesMsg);
      setOpen(false);
    }
  }, [state]);

  //   console.log(state.message);

  //   console.log(blogId);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="border-2 text-sm font-semibold  border-gray-200 px-4 py-1 text-gray-600 rounded-lg flex items-center gap-x-1"
      >
        <span> ثبت نظر جدید</span>
        <MessageCircleHeart size={15} />
      </button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="text-right">
          <SheetHeader>
            <SheetTitle className="text-right mt-8 !mb-0">
              نظر جدید
            </SheetTitle>
            <SheetDescription className="text-right !mt-0 border-b-2 pb-2">
              لطفا نظر خود را وارد کنید.
            </SheetDescription>
          </SheetHeader>
          <form action={formAction} className="mt-8">
            <label className="text-sm text-gray-600">متن نظر</label>
            <textarea
              name="text"
              rows={10}
              className="w-full border-2 rounded-lg p-4"
            ></textarea>
            <input type="hidden" name="blogId" value={blogId} />
            <SubmitCommentBtn>ارسال نظر</SubmitCommentBtn>
          </form>
        </SheetContent>
      </Sheet>
    </>
  );
}
