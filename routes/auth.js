const {Router} = require('express')
const {check, validationResult} = require('express-validator')

const router = Router()


 // /api/auth/register
router.post(
    '/register',
    [
        check('email', 'Email is not corect').isEmail(),
        check('password', 'password will have 6 symbol')
            .isLength({min:6})

    ],
    async(req, res)=>{
        try {

            console.log('Body', req.body)
            const errors = validationResult(req)

            if(!errors.isEmpty()){
                return res.status(400).json({
                    errors: errors.array(),
                    message:'data for register is not corect'
                })
            }


            res.status(201).json({message:"Save user"})


        } catch(e){
            res.status(500).json({message: "You have problem! Restart app!"})
        }
    })

//  /api/auth/login
router.post('/login',   
    [
        check('email', 'Email is not corect').normalizeEmail().isEmail(),
        check('password', 'password does not corect').exists()
    ],
    async(req, res)=>{
        try {

            const errors = validationResult(req)

            if(!errors.isEmpty()){
                return res.status(400).json({
                    errors: errors.array(),
                    message:'data for login is not corect'
                })
            }

           
            res.json({token, userId: user.id})

        } catch(e){
            res.status(500).json({message: "You have problem! Restart app!"})
        }
})

module.exports = router