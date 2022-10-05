import React, { useEffect } from 'react'
import Moment from 'moment';
import { useFetchDataQuery } from '../features/data/dataSlice'
import PostCard from './PostCard'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { checkStatus, checkStatusAsync } from '../features/status/statusSlice';

const Feed = () => {
  const status = useAppSelector((state) => state.status)

  const dispatch = useAppDispatch();

  // 0 for Need Approval, 1 for Scheduled, 2 for Publishing, 3 for Published, 4 for Error

  const statusBars = ['before:bg-[#F6BF37]', 'before:bg-[#3BC083]', 'before:bg-[#ACACAC]', 'before:bg-[#68B1F1]', 'before:bg-[#FB6450]'];
  const statusTexts = ["Need Approval", "Scheduled", "Publishing", "Published", "Error"]

  const statusBar = 'bg-[#3BC083]';
  // const bgBar = 
  // console.log(statusBars[0], 'xxxxx')

  const data = {
    "record": {
      "posts_by_date": {
        "2021-06-17": [
          {
            "published_at": "2021-06-17 08:40:52",
            "is_published": true,
            "status": 3,
            "entry": {
              "type": "photo",
              "message": "Lorem ipsum dolor sit amet, consecteturat\r\n adipiscing elit, sed do eiusmod tempor \r\nincididunt? http://bit.ly/145HD7S ",
              "image": [
                "https://s3-eu-west-1.amazonaws.com/a6apptest/public/files/58bab486274592018803fa0008413733_0A0szw7OSDIVt2rq80.jpeg"
              ],
              "video": null
            },
            "updated_at": "2021-06-17 08:41:13",
            "created_at": "2021-06-17 08:40:52",
            "link": "https://www.instagram.com/p/CQNwbu4K7DU/",
            "account": {
              "name": "Social Orientation",
              "username": "socialorientation_test",
              "image": "cfe8008ac103ab6686983a449d1a7c3e.jpg",
              "link": "https://www.instagram.com/socialorientation_test",
              "channel": "instagrambusiness"
            }
          },
          {
            "published_at": "2021-06-17 08:40:52",
            "is_published": true,
            "status": 3,
            "entry": {
              "type": "photo",
              "message": "Lorem ipsum dolor sit amet, consecteturat\r\n adipiscing elit, sed do eiusmod tempor \r\nincididunt? http://bit.ly/145HD7S ",
              "image": [
                "https://s3-eu-west-1.amazonaws.com/a6apptest/public/files/58bab4018803fa0008413733_0A0szw7OSDIVt2rq80.jpeg"
              ]
            },
            "updated_at": "2021-06-17 08:41:15",
            "created_at": "2021-06-17 08:40:52",
            "link": "https://twitter.com/smorientation/status/1405445424404746242",
            "account": {
              "name": "Social Orientation",
              "username": "smorientation",
              "image": "4b20564176a222d0ed94b60c51c69490.jpg",
              "link": "https://twitter.com/smorientation",
              "channel": "twitter"
            }
          },
          {
            "published_at": "2021-06-17 08:40:50",
            "is_published": true,
            "status": 3,
            "entry": {
              "type": "photo",
              "message": "Lorem ipsum dolor sit amet, consecteturat\r\n adipiscing elit, sed do eiusmod tempor \r\nincididunt? http://bit.ly/145HD7S ",
              "image": [
                "https://s3-eu-west-1.amazonaws.com/a6apptest/public/files/58bab4018803fa0008413733_0A0szw7OSDIVt2rq80.jpeg"
              ]
            },
            "updated_at": "2021-06-17 08:41:01",
            "created_at": "2021-06-17 08:40:50",
            "link": "https://www.facebook.com/471462903187593/posts/1436830046650869",
            "account": {
              "name": "Social Orientation",
              "username": "socialorientation",
              "image": "79d84aa0c62f1b1985f940bca642bfb4.png",
              "link": "https://www.facebook.com/471462903187593",
              "channel": "facebook"
            }
          }
        ],
        "2021-07-01": [
          {
            "published_at": "2021-07-01 00:00:00",
            "is_published": false,
            "status": 1,
            "entry": {
              "type": "photo",
              "message": "Lorem ipsum dolor sit amet, consecteturat \r\nadipiscing elit, sed do eiusmod.",
              "image": [
                "https://s3-eu-west-1.amazonaws.com/a6apptest/public/files/58bab4018803fa0008413733_oD3qc1vlVTmg8pwWaJ.jpeg"
              ]
            },
            "updated_at": "2021-06-17 08:42:18",
            "created_at": "2021-06-17 08:42:18",
            "account": {
              "name": "Social Orientation",
              "username": "socialorientation",
              "image": "79d84aa0c62f1b1985f940bca642bfb4.png",
              "link": "https://www.facebook.com/471462903187593",
              "channel": "facebook"
            }
          },
          {
            "published_at": "2021-07-01 00:00:00",
            "is_published": false,
            "status": 0,
            "entry": {
              "type": "photo",
              "message": "Lorem ipsum dolor sit amet, consecteturat \r\nadipiscing elit, sed do eiusmod.",
              "image": [
                "https://s3-eu-west-1.amazonaws.com/a6apptest/public/files/58bab4018803fa0008413733_qPJUrz2XxgneyAplXE.jpeg"
              ]
            },
            "updated_at": "2021-06-17 08:42:44",
            "created_at": "2021-06-17 08:42:44",
            "account": {
              "name": "Social Orientation",
              "username": "smorientation",
              "image": "4b20564176a222d0ed94b60c51c69490.jpg",
              "link": "https://twitter.com/smorientation",
              "channel": "twitter"
            }
          }
        ]
      }
    },
    "metadata": {
      "id": "62ed1523e13e6063dc6cd5ee",
      "private": true,
      "createdAt": "2022-08-05T13:03:31.180Z"
    }
  }


  const { record } = data;

  const dates = Object.keys(record.posts_by_date)
  const posts = Object.values(record.posts_by_date)

  return (
    <div className='bg-[#F4F7F8] flex flex-col p-4 sm:pl-56 pt-10 text-[#ACACAC] w-full bg-'>
      <ul className='flex '>{statusTexts.map((statusText, index) => <li className={`before:content-[""] before:rounded-lg before:inline-block before:mr-2 before:w-2 before:h-2 ${statusBars[index]} mr-4`}>{statusText}</li>)}</ul>
      {dates.map((date, dateIndex) =>
        <div className='flex flex-col'>
          {/* {date.toString("yyyy-MMMM-dd")} */}
          <div className='absolute mt-6'>
            {Moment(date).format('DD MMMM YYYY')}
            {/* 17 June 2021 */}
          </div>
          <div className='flex pt-5 flex-wrap '>
            {posts.map((posts, postIndex) =>
              posts.map((post) => post.published_at.substring(0, 10) == date && <PostCard post={post} date={Moment(date).format('DD MMMM YYYY')} />)
            )}
          </div>
        </div>

      )}
    </div>
  )
}

export default Feed


