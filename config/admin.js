module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '37e19255b1dd6240cd9c35f4b0eb3b21'),
  },
});
