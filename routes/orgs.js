// filename: orgs.js
// purpose: handle routes that get data about charities from db

// @route    GET api/orgs
// @desc     Get all NGOs
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
// @desc     Get NGO by ID
// @access   Private
router.get('/', auth, async (req, res) => {
    try {
        // TODO
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})