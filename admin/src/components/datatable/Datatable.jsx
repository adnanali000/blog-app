import {useState,useEffect} from 'react';
import './datatable.scss'
import { DataGrid} from '@mui/x-data-grid';
import {blogColumns} from '../../datatableSource'
import {Link} from 'react-router-dom'
import { collection, getDocs,deleteDoc,doc } from 'firebase/firestore';
import {fireDb} from '../../firebase'

const Datatable = () => {
  const [data,setData] = useState([]);

  const blogsCollectionRef = collection(fireDb, "blogs");

useEffect(() => {
  const getBlogs = async () => {
    const blogData = await getDocs(blogsCollectionRef);
    setData(blogData.docs.map((doc) => ({ ...doc.data().credentials, id: doc.id })));
  }
  getBlogs();
}, [data])


const handleDelete = async (id) => {
  const blogDoc = doc(fireDb, "blogs", id);
  if (window.confirm("Are you sure that you wanted to delete that blog ?")) {
    try {
      await deleteDoc(blogDoc);
      alert("Blog deleted successfully");
    } catch (err) {
      console.log(err);
    }
  }
}

    const actionColumn = [
        {
            field: "action",
            headerName: 'Action',
            width:200,
            renderCell: (params)=>{
                return(
                    <div className="cellAction">
                      <Link to={`/blogs/${params.row.id}`} style={{textDecoration:'none'}}>
                          <div className="viewButton">View</div>
                      </Link>
                      <div className="deleteButton" onClick={() => handleDelete(params.row.id)} >Delete</div>
                    </div>
                )
            }
        }
    ]
  return (
    <div className="datatable">
      <div className="datatableTitle">
        All Blogs
        <Link to="/blogs/new" className="link">
          Add New
        </Link>
      </div>
        <DataGrid
        className='datagrid'
        rows={data}
        columns={blogColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable