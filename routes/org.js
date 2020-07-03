// filename: orgs.js
// purpose: provide Nodejs-based database endpoints to be 
//          called by frontend components.

// @route    GET api/orgs
// @desc     Get all orgs (NGOs) in an array of json objects
// @access   Private
router.get('/', auth, async (req,res) => {
    try {
        // TODO
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

// @route    GET api/orgs/:id
// @desc     Get org as json object by id
// @access   Private
router.get('/', auth, async (req, res) => {
    try {
        // TODO
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})