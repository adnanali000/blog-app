export const blogColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "title",
      headerName: "Title",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.image} alt="avatar" />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "category",
      headerName: "Catrgory",
      width: 100,
    },
  
    {
      field: "description",
      headerName: "Description",
      width: 400,
    },
  ];
  

 