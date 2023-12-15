import axios from "axios";
import { useState } from "react";
import endpoints from "../endpoints";

function AddNewImage() {
	const [image, setImage] = useState({
		imgName: "",
		imgUrl: "",
		imgDetails: "",
	});

	function handleInput(event) {
		const { name, value } = event.target;
		setImage((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	}

	function handleSubmit() {
		console.log(image);
		axios
			.post(endpoints.images.addImage(), image)
			.then(function (res) {
				setImage({
					imgName: "",
					imgUrl: "",
					imgDetails: "",
				});
				console.log(res);
			})
			.catch(function (err) {
				console.log(err);
			});
	}

	return (
		<div className="add-new-image">
			<div className="form">
				<div className="title">Gallery CRUD App</div>
				<div className="subtitle">Let's add a new image!</div>
				<div className="input-container ic1">
					<input
						id="name"
						className="input"
						type="text"
						placeholder=" "
						name="imgName"
						value={image.imgName}
						onChange={handleInput}
					/>
					<div className="cut"></div>
					<label htmlFor="name" className="placeholder">
						Image Name
					</label>
				</div>
				<div className="input-container ic2">
					<input
						id="url"
						className="input"
						type="text"
						placeholder=" "
						name="imgUrl"
						value={image.imgUrl}
						onChange={handleInput}
					/>
					<div className="cut"></div>
					<label htmlFor="url" className="placeholder">
						Image URL
					</label>
				</div>
				<div className="input-container ic2">
					<input
						id="details"
						className="input"
						type="text"
						placeholder=" "
						name="imgDetails"
						value={image.imgDetails}
						onChange={handleInput}
					/>
					<div className="cut"></div>
					<label htmlFor="details" className="placeholder">
						Image Details
					</label>
				</div>
				<button type="text" className="submit" onClick={handleSubmit}>
					submit
				</button>
			</div>
		</div>
	);
}

export default AddNewImage;
