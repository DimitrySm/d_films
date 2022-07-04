import Cookies from 'js-cookie'
import { Button, Container, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setUser } from '../../redux/actions/user'
import { userSelector } from '../../redux/selectors/user'
import s from './Header.module.css'

export const Header = () => {
	const user = useSelector(userSelector);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const toLogin = () => {
		navigate('/login');
	}

	const logout = () => {
		Cookies.remove("Authorization");
		dispatch(setUser(null))
		navigate('/login')
	}

	return (
		<Navbar>
			<Container>
				<Link to='/films' className={s.link}>
					DFilms
				</Link>
				<Navbar.Collapse className="justify-content-end">
					{user && (
						<div className={s.signText}>
							Signed in as: {user.email}
						</div>)
					}
					{user ? (
						<Button variant="danger" onClick={logout}>
							Log out
						</Button>
					)
						: (
							<Button variant="light" onClick={toLogin}>
								Login
							</Button>
						)}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

