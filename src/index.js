// IMPORT COMPONENTS
import Layout from './components/layout'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'

// EXPORT COMPONENTS
export { Layout }
export { Navbar }
export { Sidebar }

// IMPORT DIRECTIVES
import Scrollable from './directives/scrollable'
import SidebarToggle from './directives/sidebar-toggle'

// EXPORT DIRECTIVES
export { Scrollable }
export { SidebarToggle }

// LIBRARY
let VueBootstrapLayout = {
	Layout,
	Navbar,
	Sidebar,
	Scrollable,
	SidebarToggle
}

// SETUP (IF REQUIRED)
VueBootstrapLayout.install = function (Vue) {}

// BROWSER AUTO INSTALL
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(VueBootstrapLayout)
}

// EXPORT DEFAULT
export default VueBootstrapLayout