import React from 'react'
import styled from 'styled-components';
import { SectionStyled } from '../Layouts';
import MainTitle from './MainTitle';
import BlogsData from './Data/Data';


const BlogSection = () => {
    const { blogsData  } = BlogsData;

    return (
        <BlogSectionStyled>
            <SectionStyled>
                <div className="title-con">
                    <MainTitle  title={"Popular Blogs"}  subtitle={"Our Top Blogs"} parag={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."} />
                </div>
                <div className="blogs">
                    {
                        blogsData.map((blogitem)=>{
                            return <div className="blog" key={blogitem.id}>
                                <div className="image">
                                    <img src={blogitem.image} alt="..." />
                                </div>
                                <h6>{blogitem.title}</h6>
                                <div className="user">
                                    <p> Creator : </p>
                                    <p>{blogitem.name}</p>
                                </div>
                            </div>

                        })
                    }
                </div>
            </SectionStyled>
        </BlogSectionStyled>
    )
}
//styled
const BlogSectionStyled = styled.section`
.blogs{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 2%;
    padding-top: 2%;
    .blog{
        background: rgb(255, 255, 255, 0.03);
        border-radius: 20px;
        .image{
            height: 300px;
            width: 100%;
            overflow: hidden;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            img{
                height: 100%;
                width: 100%;
                transition: all .4s ease-in-out;
                object-fit: cover;
                border-top-left-radius: 20px;
                border-top-right-radius: 20px;
                filter: grayscale(50%);
                &:hover{
                    filter: grayscale(0);
                    transform: scale(1.2) rotate(3deg);
                }
            }
        }
        h6{
            font-weight: 500;
            font-size: 18px;
            padding: 10px 10px 5px 10px;

        }
        .user{
            padding: 10px 10px 20px 10px;
            display: flex;
            p:first-child{
                padding-right: 10px;
                opacity: 0.5;
            }
        }
    }
}
`;
export default BlogSection
