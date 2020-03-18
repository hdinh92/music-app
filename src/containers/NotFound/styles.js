const styles = () => ({
    root:{
        backgroundColor : "#f8f9fb",
        width: 1200
    },
    icon:{
        width: '100%',
        height: '100vh',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    btn:{
        background : "#48a8e5",
        color : 'white',
        position: 'absolute',
        top: '70%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        '&:hover':{
            background : "#a3d4f2",
        }
    }
})

export default styles