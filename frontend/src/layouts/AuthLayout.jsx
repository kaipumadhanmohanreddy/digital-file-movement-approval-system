const AuthLayout = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <div
      className="
        min-h-screen
        flex
        bg-gradient-to-br
        from-slate-900
        via-blue-900
        to-slate-800
      "
    >
      {/* Left Section */}

      <div
        className="
          hidden lg:flex
          w-1/2
          flex-col
          justify-center
          px-20
          text-white
        "
      >
        {/* Logo */}

        <div className="mb-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
            alt="Government Logo"
            className="w-20 mb-6"
          />

          <h1 className="text-5xl font-bold leading-tight">
            Digital File
            Movement &
            Approval System
          </h1>

          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            Secure government workflow
            management platform for
            digital file tracking,
            approvals, department
            coordination, and enterprise
            operations.
          </p>
        </div>

        {/* Features */}

        <div className="space-y-4 text-slate-300">
          <div>
            ✓ Secure JWT Authentication
          </div>

          <div>
            ✓ Role-Based Access Control
          </div>

          <div>
            ✓ Real-Time File Tracking
          </div>

          <div>
            ✓ Enterprise Workflow System
          </div>
        </div>
      </div>

      {/* Right Section */}

      <div
        className="
          flex-1
          flex
          items-center
          justify-center
          p-6
        "
      >
        <div
          className="
            w-full
            max-w-md
            bg-white/10
            backdrop-blur-lg
            border
            border-white/20
            rounded-3xl
            p-8
            shadow-2xl
          "
        >
          {/* Mobile Logo */}

          <div className="lg:hidden text-center mb-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
              alt="logo"
              className="w-14 mx-auto mb-3"
            />

            <h1 className="text-white text-2xl font-bold">
              Government Portal
            </h1>
          </div>

          {/* Heading */}

          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-white">
              {title}
            </h2>

            <p className="text-slate-300 mt-2">
              {subtitle}
            </p>
          </div>

          {/* Form */}

          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;