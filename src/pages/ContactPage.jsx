import { useState } from "react";

const ContactPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
		// Clear error for this field when user starts typing
		if (errors[name]) {
			setErrors((prev) => ({
				...prev,
				[name]: "",
			}));
		}
	};

	const validateForm = () => {
		const newErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = "Name is required";
		}

		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Email is invalid";
		}

		if (!formData.subject.trim()) {
			newErrors.subject = "Subject is required";
		}

		if (!formData.message.trim()) {
			newErrors.message = "Message is required";
		} else if (formData.message.trim().length < 10) {
			newErrors.message = "Message must be at least 10 characters";
		}

		return newErrors;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const newErrors = validateForm();

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		setIsSubmitting(true);

		// Simulate API call
		setTimeout(() => {
			console.log("Form submitted:", formData);
			setIsSubmitting(false);
			setSubmitSuccess(true);
			setFormData({
				name: "",
				email: "",
				subject: "",
				message: "",
			});

			// Hide success message after 5 seconds
			setTimeout(() => {
				setSubmitSuccess(false);
			}, 5000);
		}, 1500);
	};

	return (
		<div className="min-h-screen py-16 px-8 bg-linear-to-br from-indigo-500 to-purple-600">
			<div className="max-w-3xl mx-auto">
				<div className="text-center mb-12 text-white">
					<h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
					<p className="text-lg opacity-95 max-w-2xl mx-auto">
						Have a question or feedback? We'd love to hear from you.
						Fill out the form below and we'll get back to you as
						soon as possible.
					</p>
				</div>

				{submitSuccess && (
					<div className="bg-green-500 text-white p-4 rounded-lg mb-8 text-center font-medium animate-slide-down">
						<p>
							✓ Thank you for your message! We'll get back to you
							soon.
						</p>
					</div>
				)}

				<form
					onSubmit={handleSubmit}
					className="bg-white p-10 rounded-xl shadow-2xl mb-12"
				>
					<div className="grid md:grid-cols-2 gap-6 mb-6">
						<div>
							<label
								htmlFor="name"
								className="block mb-2 font-semibold text-gray-700"
							>
								Name <span className="text-red-500">*</span>
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								className={`w-full px-3 py-2 border-2 rounded-lg transition-all focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 ${
									errors.name
										? "border-red-500"
										: "border-gray-300"
								}`}
								placeholder="Your name"
							/>
							{errors.name && (
								<span className="block text-red-500 text-sm mt-2">
									{errors.name}
								</span>
							)}
						</div>

						<div>
							<label
								htmlFor="email"
								className="block mb-2 font-semibold text-gray-700"
							>
								Email <span className="text-red-500">*</span>
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								className={`w-full px-3 py-2 border-2 rounded-lg transition-all focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 ${
									errors.email
										? "border-red-500"
										: "border-gray-300"
								}`}
								placeholder="your.email@example.com"
							/>
							{errors.email && (
								<span className="block text-red-500 text-sm mt-2">
									{errors.email}
								</span>
							)}
						</div>
					</div>

					<div className="mb-6">
						<label
							htmlFor="subject"
							className="block mb-2 font-semibold text-gray-700"
						>
							Subject <span className="text-red-500">*</span>
						</label>
						<input
							type="text"
							id="subject"
							name="subject"
							value={formData.subject}
							onChange={handleChange}
							className={`w-full px-3 py-2 border-2 rounded-lg transition-all focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 ${
								errors.subject
									? "border-red-500"
									: "border-gray-300"
							}`}
							placeholder="What's this about?"
						/>
						{errors.subject && (
							<span className="block text-red-500 text-sm mt-2">
								{errors.subject}
							</span>
						)}
					</div>

					<div className="mb-6">
						<label
							htmlFor="message"
							className="block mb-2 font-semibold text-gray-700"
						>
							Message <span className="text-red-500">*</span>
						</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							className={`w-full px-3 py-2 border-2 rounded-lg transition-all resize-y min-h-30 focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 ${
								errors.message
									? "border-red-500"
									: "border-gray-300"
							}`}
							placeholder="Tell us more..."
							rows="6"
						></textarea>
						{errors.message && (
							<span className="block text-red-500 text-sm mt-2">
								{errors.message}
							</span>
						)}
					</div>

					<button
						type="submit"
						className="w-full px-4 py-3 bg-linear-to-r from-indigo-500 to-purple-600 text-white rounded-lg text-lg font-semibold cursor-pointer transition-all hover:-translate-y-1 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 mt-4"
						disabled={isSubmitting}
					>
						{isSubmitting ? "Sending..." : "Send Message"}
					</button>
				</form>

				<div className="grid md:grid-cols-3 gap-6">
					<div className="bg-white p-6 rounded-xl text-center shadow-lg">
						<h3 className="text-xl font-semibold mb-2 text-gray-700">
							📧 Email
						</h3>
						<p className="text-gray-600">support@mixmaster.com</p>
					</div>
					<div className="bg-white p-6 rounded-xl text-center shadow-lg">
						<h3 className="text-xl font-semibold mb-2 text-gray-700">
							📞 Phone
						</h3>
						<p className="text-gray-600">+1 (555) 123-4567</p>
					</div>
					<div className="bg-white p-6 rounded-xl text-center shadow-lg">
						<h3 className="text-xl font-semibold mb-2 text-gray-700">
							📍 Address
						</h3>
						<p className="text-gray-600">
							123 Cocktail Street, Bar City, BC 12345
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
