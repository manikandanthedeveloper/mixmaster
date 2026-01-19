import axios from "axios";
import { useState } from "react";
import { Form, useNavigate } from "react-router";
import { toast } from "react-toastify";
const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

const NewsLetter = () => {
	const navigate = useNavigate();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		lastName: "",
		email: "",
	});
	const [errors, setErrors] = useState({});

	const isValid = () => {
		const newErrors = {};

		// Validate name (required)
		if (formData.name.trim() === "" || formData.name.length < 2) {
			newErrors.name = "Name must be at least 2 characters long";
		}

		// Validate lastName (optional, but if provided must be valid)
		if (formData.lastName.trim() === "" || formData.lastName.length < 2) {
			newErrors.lastName = "Last Name must be at least 2 characters long";
		}

		// Validate email (required)
		if (formData.email.trim() === "") {
			newErrors.email = "Email address is required";
		} else {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			if (!emailRegex.test(formData.email)) {
				newErrors.email = "Please enter a valid email address";
			}
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const onSubmitHandler = async (e) => {
		e.preventDefault();
		// Handle form submission logic here
		if (!isValid()) {
			return;
		}
		setIsSubmitting(true);
		try {
			const response = await axios.post(newsletterUrl, formData);

			toast.success(response.data.msg || "Subscribed successfully!");
			setFormData({
				name: "",
				lastName: "",
				email: "",
			});
			navigate("/");
		} catch (error) {
			toast.error(
				error.response?.data?.msg ||
					"Subscription failed. Please try again."
			);
			console.error("Subscription failed:", error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
			<h2 className="text-2xl font-bold mb-4">
				Subscribe to our Newsletter
			</h2>
			<Form
				className="space-y-4"
				method="POST"
				onSubmit={onSubmitHandler}
			>
				<div>
					<label
						htmlFor="name"
						className="block text-sm font-medium text-gray-700"
					>
						Name
					</label>
					<input
						type="text"
						id="name"
						className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.name ? "border-red-500" : ""}`}
						placeholder="Enter your name"
						value={formData.name}
						onChange={(e) =>
							setFormData({ ...formData, name: e.target.value })
						}
					/>
					{errors.name && (
						<div className="text-sm text-red-500 mt-1">
							{errors.name}
						</div>
					)}
				</div>
				<div>
					<label
						htmlFor="lastName"
						className="block text-sm font-medium text-gray-700"
					>
						Last Name
					</label>
					<input
						type="text"
						id="lastName"
						className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.lastName ? "border-red-500" : ""}`}
						placeholder="Enter your last name"
						value={formData.lastName}
						onChange={(e) =>
							setFormData({
								...formData,
								lastName: e.target.value,
							})
						}
					/>
					{errors.lastName && (
						<div className="text-sm text-red-500 mt-1">
							{errors.lastName}
						</div>
					)}
				</div>
				<div>
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700"
					>
						Email Address
					</label>
					<input
						type="email"
						id="email"
						className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${errors.email ? "border-red-500" : ""}`}
						placeholder="Enter your email address"
						value={formData.email}
						onChange={(e) =>
							setFormData({ ...formData, email: e.target.value })
						}
					/>
					{errors.email && (
						<div className="text-sm text-red-500 mt-1">
							{errors.email}
						</div>
					)}
				</div>
				<button
					type="submit"
					className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
					disabled={isSubmitting}
				>
					{isSubmitting ? "Submitting..." : "Subscribe"}
				</button>
			</Form>
		</div>
	);
};

export default NewsLetter;
