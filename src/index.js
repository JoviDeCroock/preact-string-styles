import { options } from 'preact';

const old = options.vnode;
options.vnode = vnode => {
	if (vnode.props && typeof vnode.props.style==='string') {
		vnode.props.style = {
			cssText: vnode.props.style
		};
	}
	if (old) old(vnode);
};
