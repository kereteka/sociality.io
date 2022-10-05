import React from 'react'
import Moment from 'moment';
import Linkify from 'linkify-react';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'
import brokenPic from '../../public/no-post-image.png'

import { useFetchDataQuery } from '../features/data/dataSlice'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { checkStatus } from '../features/status/statusSlice';



const PostCard = ({ post }) => {
  const addDefaultSrc = (e) => {
    e.target.src = brokenPic
  }
  // const { data = [], isFetching } = useFetchDataQuery()
  console.log(post.status, 'postttooo')
  interface TextProps {
    content: string;
  }

  const status = useAppSelector((state) => state.status)
  const dispatch = useAppDispatch();


  const statusBgColor = post.status == 1 ? ' bg-[#3BC083] '
    : post.status == 2 ? ' bg-[#ACACAC]'
      : post.status == 3 ? '  bg-[#68B1F1]'
        : post.status == 4 ? ' bg-[#F6F6F6]'
          : '  bg-[#F6BF37]';

  const icon = post.account.channel === 'instagrambusiness' ? <AiOutlineInstagram />
    : post.account.channel === 'twitter' ? <BsTwitter />
      : post.account.channel === 'facebook' ? <FaFacebookF /> : ''

  const URL_REGEX =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;

  function Text({ content }: TextProps) {
    const words = content.split(' ');
    return (
      <p>
        {words.map((word) => {
          return word.match(URL_REGEX) ? (
            <>
              <a href={word} target="_blank" className=' text-[#85c5f2]' >{word}</a>{' '}
            </>
          ) : (
            word + ' '
          );
        })}
      </p>
    );
  }
  return (
    <div className='w-[320px] h-[360px] rounded flex mt-10  text-[#ACACAC] text-xs font-semibold bg-white flex-shrink-0 mr-6  '>
      <div className={" w-10 flex justify-center items-center rounded-l " + statusBgColor}>
        {/* {post.status} */}
        <div className='text-white text-xl '> {icon}</div>
      </div>
      <div className='text-justify container m-4'>
        <div className='flex '>
          <p className=' opacity-50'>
            {Moment(post.published_at).format('DD MMMM YYYY - hh:mm')}
          </p>
          <span className=''>icon falan </span>
        </div>
        <p className='pt-4 pb-4'>
          {/* <Linkify properties={{ target: '_blank', style: { color: 'red', fontWeight: 'bold' } }}>
            {post.entry.message}</Linkify> */}
          <Text content={post.entry.message} />
        </p>
        <img className=' w-[225px] h-[200px]' src={post.entry.image[0]} alt="" onError={addDefaultSrc} />
        <div className='mt-4'>
          <span className=''>like mike </span>
        </div>
      </div>
    </div>
  )
}

export default PostCard