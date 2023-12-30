import { TextField, Button, Card, CardContent, CardHeader } from '@mui/material'
import './PostListItem.css'
import { Component } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Avatar from '@mui/material/Avatar'
import ShareIcon from '@mui/icons-material/Share'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'

type PostListItemType = {
    image: string
    title: string
    author: string
    description: string
}

const PostListItem = ({
    image,
    title,
    author,
    description,
}: PostListItemType) => {
    return (
        <Card className="posts-list-item">
            <CardContent className="CardContentTop">
                <div className="product-img">
                    <div className="product-img-dark">
                        <img src={image} alt="this.props.title" />
                    </div>
                </div>
                <div className="blockOnPhoto">
                    <div className="TwoblockOnPhotoAll">
                        <div className="TwoblockOnPhoto">
                            <span>Aenean Eleifend</span>
                        </div>
                        <div className="TwoblockOnPhoto">
                            <span>Aliquam</span>
                        </div>
                    </div>
                    <div className="EndBlockPhoto">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="23"
                                height="23"
                                viewBox="0 0 23 23"
                                fill="none"
                            >
                                <path
                                    d="M14.9998 7H15.0091"
                                    stroke="white"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M17 3H7C5.34315 3 4 4.34315 4 6V16C4 17.6569 5.34315 19 7 19H17C18.6569 19 20 17.6569 20 16V6C20 4.34315 18.6569 3 17 3Z"
                                    stroke="white"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M4 14L8 9.99995C8.45606 9.56111 8.97339 9.33008 9.5 9.33008C10.0266 9.33008 10.5439 9.56111 11 9.99995L16 15"
                                    stroke="white"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M14.0002 13L15.0002 12C15.4563 11.5611 15.9736 11.3301 16.5002 11.3301C17.0269 11.3301 17.5442 11.5611 18.0002 12L20.0002 14"
                                    stroke="white"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
                <h2 className="posts-title">{title}</h2>
                <CardHeader
                    className="CartHeaderAuthor"
                    avatar={
                        <Avatar sx={{}} aria-label="recipe">
                            <img src="./images/Ellipse-Avatar.svg" alt="" />
                        </Avatar>
                    }
                    title="Joanna Wellick"
                    subheader="June 28, 2018"
                    action={
                        <div className="ShareIcon">
                            <Button>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="17"
                                    height="18"
                                    viewBox="0 0 17 18"
                                    fill="none"
                                >
                                    <path
                                        d="M3.04545 11C4.17513 11 5.09091 10.1046 5.09091 9C5.09091 7.89543 4.17513 7 3.04545 7C1.91578 7 1 7.89543 1 9C1 10.1046 1.91578 11 3.04545 11Z"
                                        stroke="#6C757D"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M13.9546 5C15.0843 5 16.0001 4.10457 16.0001 3C16.0001 1.89543 15.0843 1 13.9546 1C12.825 1 11.9092 1.89543 11.9092 3C11.9092 4.10457 12.825 5 13.9546 5Z"
                                        stroke="#6C757D"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M13.9546 17C15.0843 17 16.0001 16.1046 16.0001 15C16.0001 13.8954 15.0843 13 13.9546 13C12.825 13 11.9092 13.8954 11.9092 15C11.9092 16.1046 12.825 17 13.9546 17Z"
                                        stroke="#6C757D"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M4.82764 9.98047L12.1717 14.0196M12.1717 3.98047L4.82764 8.01964"
                                        stroke="#6C757D"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>{' '}
                                <span>1K shares</span>
                            </Button>
                        </div>
                    }
                />

                <h3 className="posts-title">{}</h3>
                <p className="posts-description">{description}</p>
                <div className="btns-wrap">
                    <Button>View Post</Button>
                </div>
            </CardContent>
        </Card>
    )
}
export default PostListItem
