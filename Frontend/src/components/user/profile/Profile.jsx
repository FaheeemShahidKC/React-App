import React, { useState } from 'react'
import './Profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfileApi } from '../../../api/userApi'
import { setUserDetails } from '../../../store/slice/Slice'
import { useNavigate } from 'react-router-dom'
import { logoutDetails } from '../../../store/slice/Slice';
function Profile() {

  const oldData = useSelector((state) => state.user)
  const [error, setError] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const initialState = {
    id: oldData.id || "",
    name: oldData.name || "",
    email: oldData.email || "",
    phone: oldData.phone || "",
    image: oldData.image || ""
  }
  const [userData, setUserData] = useState(initialState)

  const updateProfile = (e) => {
    e.preventDefault()
    try {
      if (!emailPattern.test(userData.email)) {
        return setError("Invalid email format")
      } else if (userData.name < 4) {
        return setError("Name must contain 4 character")
      } else if (userData.phone && userData.phone.length < 10) {
        return setError("Phone must contain 10 digits")
      }
      updateProfileApi(userData).then((res) => {
        dispatch(
          setUserDetails({
            id: res.userData._id,
            name: res.userData.name,
            email: res.userData.email,
            image: res.userData.image,
            phone: res.userData.phone,
            is_Admin: res.userData.is_Admin,
          })
        );
        navigate('/')
      }).catch((error) => {
        console.log(error.message);
      })

    } catch (error) {
      console.log(error.message);
    }
  }

  const logOut = async () => {
    localStorage.removeItem('token')
    dispatch(logoutDetails())
    navigate('/login')
  }

  return (
    <div className="profile-container">
      <div className="main-body">
        <div className="row">
          <div className="col-lg-4">
            <div className="profile-card ">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src={userData.image ? `/uploads/${userData.image}` : "https://th.bing.com/th/id/OIP.puMo9ITfruXP8iQx9cYcqwHaGJ?pid=ImgDet&rs=1"} alt="Admin" className="rounded-circle  p-1 bg-primary" width="150" height="150" />
                  <div className="mt-3">
                    <h4>{userData.name}</h4>
                    <p className="text-secondary mb-1">{userData.email}</p>
                    <p className="text-muted font-size-sm">{userData.phone || ''}</p>
                    <button onClick={logOut} className="btn btn-primary profile-btn">Logout</button>
                  </div>
                </div>
                <hr className="my-4" />

              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className=" profile-card2">
              <form onSubmit={updateProfile} className="card-body">
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className="form-control col-input" onChange={(e) => setUserData({ ...userData, name: e.target.value })} value={userData.name} />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary col-input">
                    <input type="text" className="form-control col-input" onChange={(e) => setUserData({ ...userData, email: e.target.value })} value={userData.email} />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Phone</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="text" className="form-control col-input" onChange={(e) => setUserData({ ...userData, phone: e.target.value })} value={userData.phone} />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-3">
                    <h6 className="mb-0">image</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <input type="file" className="form-control col-input" onChange={(e) => setUserData({ ...userData, image: e.target.files[0] })} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-3"></div>
                  <div className="col-sm-9 text-secondary">
                    <input type="submit" className="btn btn-primary px-4" value={"save change"} />
                  </div>
                </div>
                {error && <span style={{ color: "white", justifyContent: "center", alignItems: "center", display: "flex" }}>{error}</span>}
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
