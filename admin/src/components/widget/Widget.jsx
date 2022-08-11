import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CreateIcon from '@mui/icons-material/Create';

const Widget = ({ type,blogs,users }) => {
    let data;
    switch (type) {
        case "user":
            data = {
                title: "USER",
                isMoney: false,
                list: 80,
                icon: (
                    <PersonOutlineOutlinedIcon
                        className="icon"
                        style={{
                            color: "crimson",
                            backgroundColor: "rgba(255,0,0,0.2)"
                        }}

                    />)
            };
            break;
        case "blogs":
            data = {
                title: "Blogs",
                isMoney: false,
                list:50,
                icon: (
                    <CreateIcon
                        className="icon"
                        style={{
                            color: "goldenrod",
                            backgroundColor: "rgba(218,165,32,0.2)"
                        }}
                    />)
            };
            break;

        default:
            break;
    }

    return (
        <div className='widget'>
            <div className="left">
                <div className="title">{data.title}</div>
                <div className="counter">{blogs ? blogs && blogs.length : users && users.length}</div>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpOutlinedIcon />
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget