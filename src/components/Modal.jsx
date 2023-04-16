import React from 'react'

import { closeModal } from '../features/modal/modalSlice'
import { clearCart } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

export const Modal = () => {
	const dispatch = useDispatch()
	return (
		<aside className='modal-container'>
			<div className='modal'>
				<h4>remove all itmes from shopping cart?</h4>
				<div className='btn-container'>
					<button
						type='button'
						className='btn confirm-btn'
						onClick={() => {
							dispatch(closeModal())
							dispatch(clearCart())
						}}>
						cofirm
					</button>
					<button type='button' className='btn clear-btn' onClick={() => dispatch(closeModal())}>
						cancel
					</button>
				</div>
			</div>
		</aside>
	)
}
