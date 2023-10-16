import logo from './logo.svg';
import './App.css';
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';

function App() {
    return (
        // xs의 단위는 MUI breakpoints 문서 참고
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                {/* Avatar를 사용하여 LockOutlined의 주변에 동그라미를 표시 */}
                {/* sx를 사용하여 m = margin, bgcolor = backgroundcolor를 설정 */}
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlined />
                </Avatar>
                {/* Typography 컴포넌트 - Text의 폰트를 지정할수있게해주는 컴포넌트 */}
                {/* component 속성 = 감싸질 태그이름 ex) <h1>Sign in</h1> */}
                {/* variant 속성을 h5로 지정하여 감싸져있는태그는 h1이지만 디자인은 h5를 사용한다. */}
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                {/* TextField 컴포넌트를 이용하여 이메일주소 입력과 비밀번호입력칸을 생성 */}
                {/* label 속성을 사용하여 TextBox안에 표시될 문자를 설정 */}
                {/* required 속성을 추가하여 반드시 입력하게 지정 */}
                {/* fullWidth 속성을 사용하여 가로화면 전체를 사용 */}
                {/* autoComplete 속성 - 자동입력 기능  */}
                {/* autoFocus 속성 - UI가 시작하자마자 자동으로 사용자의 커서가 이동 */}
                <TextField
                    margin="normal"
                    label="Email Address"
                    required
                    fullWidth
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                {/* type을 password로 지정하여 입력된 password가 가려지게 지정 */}
                <TextField
                    margin="normal"
                    label="Password"
                    type="password"
                    required
                    fullWidth
                    name="password"
                    autoComplete="current-password"
                />
                {/* FormControlLabel을 사용하여 Checkbox에 label을 달아주어 label이 클릭되었을때도 반응을하게 하였다. */}
                {/* Checkbox의 value를 remember로 설정 */}
                <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                {/* Button의 type을 submit으로 지정하여 서버에 전송할수있게함 */}
                {/* variant 속성 - 버튼의 모양을 결정 */}
                {/* sx 속성 - 컴포넌트의 디자인을 간단하게 고치고싶을때 사용(mt = margin top , mb = margin bottom) */}
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Sign in
                </Button>
                {/* Grid 컴포넌트를 사용하여 나란히 배치하고싶을때 사용 ( 행 ) */}
                <Grid container>
                    {/* Grid안에 Grid = 열 */}
                    {/* xs 속성 - auto 레이아웃 두개의 Grid 요소들이 빈공간을 다가져가게됌 */}
                    <Grid item xs>
                        <Link>Forgot password?</Link>
                    </Grid>
                    <Grid item>
                        <Link>Sign Up</Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

export default App;
