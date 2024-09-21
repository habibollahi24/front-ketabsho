import { BlogType } from '@/types/types';
import {
  RefreshCcw,
  User,
  UserCircle,
  UserCog,
  UserIcon,
  UserRound,
  UserSquare,
  UserX,
} from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import NewCommentBtn from '../client-action-component/NewCommentBtn';
import RepplyCommentBtn from '../client-action-component/RepplyCommentBtn';

export default function Comments({
  blog,
  isAuth,
}: {
  blog: BlogType;
  isAuth: any;
}) {
  return (
    <div className="border-2 border-dashed border-gray-100 rounded-xl my-12 p-6">
      {!isAuth && (
        <p className="text-sm text-gray-600 pb-8">
          برای ارسال نظر و پاسخ باید وارد حساب کاربری خود شوید.
        </p>
      )}

      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">نظرات کاربران کتابشو</p>

        {isAuth && <NewCommentBtn blogId={blog._id} />}
      </div>
      {blog.comments.length === 0 && (
        <p className="my-4 text-gray-600">هنوز نظری ثبت نشده است.</p>
      )}

      {blog?.comments?.map((comment) => {
        return (
          <div
            key={comment._id}
            className=" bg-gray-50 p-4 rounded-lg my-4"
          >
            <div className="flex items-center justify-between py-2 border-b-2">
              <div className="flex items-center gap-x-1">
                {comment.user.avatarUrl ? (
                  <Image
                    src={comment?.user?.avatarUrl || ''}
                    alt={comment?.user?.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                ) : (
                  <div className="size-10 font-semibold grid place-items-center rounded-full bg-gray-200 text-gray-600">
                    <User />
                  </div>
                )}

                <div className="">
                  <div className="text-sm font-semibold leading-4">
                    {comment?.user.name}
                  </div>
                  <div className="text-sm text-gray-500 leading-4">
                    {comment.createdAt}
                  </div>
                </div>
              </div>
              {isAuth && (
                <RepplyCommentBtn
                  parentCommentUsername={comment.user.name}
                  blogId={blog._id}
                  parentCommentId={comment._id}
                />
              )}
            </div>
            <p className=" my-4">{comment.content.text}</p>
            {comment.openToComment &&
              comment.answers.map((comAns) => {
                return (
                  <div
                    key={comAns._id}
                    className="mr-8 bg-gray-100 p-4 rounded-lg my-2"
                  >
                    <div className="flex items-center justify-between py-2 border-b-2">
                      <div className="flex items-center gap-x-1">
                        {comAns.user.avatarUrl ? (
                          <Image
                            src={comAns?.user?.avatarUrl || ''}
                            alt={comAns?.user?.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                        ) : (
                          <div className="size-10 font-semibold grid place-items-center rounded-full bg-gray-200 text-gray-600">
                            <User />
                          </div>
                        )}

                        <div className="">
                          <div className="text-sm font-semibold leading-4">
                            {comAns.user.name}
                          </div>
                          <div className="text-sm text-gray-500 leading-4">
                            {comAns.createdAt}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className=" my-4">{comAns.content.text}</p>
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
}
