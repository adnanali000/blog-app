import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget'
import Table from '../../components/table/Table'
import './home.scss'

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        
        <div className="widgets">
          <Widget type ="user"/>
          <Widget type ="blogs"/>
          
        </div>
        <div className="listContainer">
          <div className="listTitle">All Users</div>
          <Table /> 
        </div>
      </div>
    </div>
  )
}

export default Home